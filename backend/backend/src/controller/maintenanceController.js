

// src/controllers/maintenanceController.js
const Maintenance = require('../models/maintenance');
const Room = require('../models/room');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { createMaintenanceSchema, updateMaintenanceSchema } = require('../validators/maintenanceValidator');

// @desc    Report a maintenance issue (by guest or staff)
// @route   POST /api/maintenance
// @access  Private
const reportMaintenance = async (req, res) => {
  try {
    const result = createMaintenanceSchema.safeParse(req.body);
    if (!result.success) {
      return errorResponse(res, result.error.errors.map(e => e.message).join(', '), 400);
    }

    const { roomId, description, type, priority, images } = result.data;

    const room = await Room.findById(roomId);
    if (!room) {
      return errorResponse(res, 'Room not found', 404);
    }

    const maintenance = await Maintenance.create({
      room: roomId,
      reportedBy: req.user._id,
      description,
      type: type || 'other',
      priority: priority || 'medium',
      images: images || []
    });

    // Optional: Change room status to maintenance if high priority
    if (priority === 'high') {
      room.status = 'maintenance';
      await room.save();
    }

    await maintenance.populate('room', 'roomNumber type');
    await maintenance.populate('reportedBy', 'name role');

    successResponse(res, maintenance, 'Maintenance request reported successfully', 201);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all maintenance requests (filtered)
// @route   GET /api/maintenance
// @access  Private (housekeeping, manager, admin)
// @query   status=open&roomId=xxx&priority=high
const getMaintenanceRequests = async (req, res) => {
  try {
    const { status, roomId, priority, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) query.status = status;
    if (roomId) query.room = roomId;
    if (priority) query.priority = priority;

    const requests = await Maintenance.find(query)
      .populate('room', 'roomNumber type status')
      .populate('reportedBy', 'name role')
      .sort({ priority: -1, createdAt: -1 }) // High priority first
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Maintenance.countDocuments(query);

    successResponse(res, {
      requests,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update maintenance request status
// @route   PATCH /api/maintenance/:id
// @access  Private (housekeeping, manager, admin)
const updateMaintenanceStatus = async (req, res) => {
  try {
    const result = updateMaintenanceSchema.safeParse(req.body);
    if (!result.success) {
      return errorResponse(res, result.error.errors.map(e => e.message).join(', '), 400);
    }

    const { status, notes } = result.data;

    const maintenance = await Maintenance.findById(req.params.id).populate('room');
    if (!maintenance) {
      return errorResponse(res, 'Maintenance request not found', 404);
    }

    maintenance.status = status;
    if (status === 'resolved') {
      maintenance.resolvedAt = new Date();
      maintenance.notes = notes;

      // If room was in maintenance, set back to available or cleaning
      if (maintenance.room.status === 'maintenance') {
        maintenance.room.status = 'cleaning'; // Needs housekeeping
        await maintenance.room.save();
      }
    }

    if (status === 'in-progress' && notes) {
      maintenance.notes = notes;
    }

    await maintenance.save();
    await maintenance.populate('room', 'roomNumber status');
    await maintenance.populate('reportedBy', 'name');

    successResponse(res, maintenance, 'Maintenance status updated');
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get pending cleaning rooms (for housekeeping dashboard)
// @route   GET /api/maintenance/cleaning-tasks
// @access  Private (housekeeping)
const getCleaningTasks = async (req, res) => {
  try {
    const cleaningRooms = await Room.find({ status: 'cleaning' })
      .select('roomNumber type floor')
      .sort({ roomNumber: 1 });

    successResponse(res, {
      tasks: cleaningRooms,
      total: cleaningRooms.length
    }, 'Cleaning tasks retrieved');
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  reportMaintenance,
  getMaintenanceRequests,
  updateMaintenanceStatus,
  getCleaningTasks
};