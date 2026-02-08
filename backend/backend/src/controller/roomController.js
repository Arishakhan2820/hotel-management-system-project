// src/controllers/roomController.js
const Room = require('../models/room');
const Booking = require('../models/booking');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { createRoomSchema, updateRoomSchema, availabilitySchema } = require('../validators/roomValidator');

// @desc    Create new room
// @route   POST /api/rooms
// @access  Private (admin/manager)
const createRoom = async (req, res) => {
  try {
    const result = createRoomSchema.safeParse(req.body);
    if (!result.success) {
      // FIXED: Use .issues instead of .errors
      return errorResponse(res, result.error.issues.map(e => e.message).join(', '), 400);
    }

    const { roomNumber } = result.data;

    const roomExists = await Room.findOne({ roomNumber });
    if (roomExists) {
      return errorResponse(res, 'Room with this number already exists', 400);
    }

    const room = await Room.create(result.data);

    successResponse(res, room, 'Room created successfully', 201);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all rooms
// @route   GET /api/rooms
// @access  Private (all staff)
const getRooms = async (req, res) => {
  try {
    const { status, type } = req.query;
    const query = {};

    if (status) query.status = status;
    if (type) query.type = type;

    const rooms = await Room.find(query).sort({ roomNumber: 1 });

    successResponse(res, rooms);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single room
// @route   GET /api/rooms/:id
// @access  Private
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return errorResponse(res, 'Room not found', 404);
    }

    successResponse(res, room);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update room
// @route   PUT /api/rooms/:id
// @access  Private (admin/manager)
const updateRoom = async (req, res) => {
  try {
    const result = updateRoomSchema.safeParse(req.body);
    if (!result.success) {
      // FIXED: Use .issues instead of .errors
      return errorResponse(res, result.error.issues.map(e => e.message).join(', '), 400);
    }

    const room = await Room.findById(req.params.id);
    if (!room) {
      return errorResponse(res, 'Room not found', 404);
    }

    // Prevent changing roomNumber if it would conflict
    if (result.data.roomNumber && result.data.roomNumber !== room.roomNumber) {
      const exists = await Room.findOne({ roomNumber: result.data.roomNumber });
      if (exists) {
        return errorResponse(res, 'Another room already has this room number', 400);
      }
    }

    Object.assign(room, result.data);
    await room.save();

    successResponse(res, room, 'Room updated successfully');
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete room
// @route   DELETE /api/rooms/:id
// @access  Private (admin only)
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return errorResponse(res, 'Room not found', 404);
    }

    // Optional: Check if room has active bookings
    const activeBooking = await Booking.findOne({
      room: room._id,
      status: { $in: ['confirmed', 'checked-in'] }
    });

    if (activeBooking) {
      return errorResponse(res, 'Cannot delete room with active bookings', 400);
    }

    await Room.deleteOne({ _id: req.params.id });

    successResponse(res, null, 'Room deleted successfully');
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update room status (e.g., cleaning → available)
// @route   PATCH /api/rooms/:id/status
// @access  Private (reception/housekeeping)
const updateRoomStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['available', 'occupied', 'cleaning', 'maintenance'].includes(status)) {
      return errorResponse(res, 'Invalid status', 400);
    }

    const room = await Room.findById(req.params.id);
    if (!room) {
      return errorResponse(res, 'Room not found', 404);
    }

    room.status = status;
    await room.save();

    successResponse(res, room, 'Room status updated');
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get available rooms for date range
// @route   GET /api/rooms/availability?checkIn=...&checkOut=...
// @access  Public or Private (for booking form)
const getAvailableRooms = async (req, res) => {
  try {
    const result = availabilitySchema.safeParse(req.query);
    if (!result.success) {
      return errorResponse(res, 'Invalid date format. Use ISO format (e.g., 2025-12-25T14:00:00Z)', 400);
    }

    const { checkIn, checkOut, type } = result.data;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      return errorResponse(res, 'checkOut must be after checkIn', 400);
    }

    // Find rooms that are booked in the date range
    const bookedRooms = await Booking.find({
      $or: [
        { checkIn: { $lt: checkOutDate }, checkOut: { $gt: checkInDate } }
      ],
      status: { $in: ['confirmed', 'checked-in'] }
    }).distinct('room');

    const query = {
      _id: { $nin: bookedRooms },
      status: 'available'
    };

    if (type) query.type = type;

    const availableRooms = await Room.find(query).sort({ pricePerNight: 1 });

    successResponse(res, {
      availableRooms,
      total: availableRooms.length,
      checkIn,
      checkOut
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  updateRoomStatus,
  getAvailableRooms
};