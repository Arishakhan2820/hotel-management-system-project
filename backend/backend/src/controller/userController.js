

// src/controllers/userController.js
const User = require('../models/user');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { createStaffSchema, updateStaffSchema } = require('../validators/userValidator');

// @desc    Get all users (staff + guests)
// @route   GET /api/users
// @access  Private (admin/manager)
const getUsers = async (req, res) => {
  try {
    const { role, isActive, page = 1, limit = 10 } = req.query;

    const query = {};
    if (role) query.role = role;
    if (isActive !== undefined) query.isActive = isActive === 'true';

    const users = await User.find(query)
      .select('-password')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await User.countDocuments(query);

    successResponse(res, {
      users,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Private (admin or self)
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return errorResponse(res, 'User not found', 404);
    }

    // Allow user to view own profile
    if (req.user._id.toString() !== req.params.id && req.user.role !== 'admin' && req.user.role !== 'manager') {
      return errorResponse(res, 'Not authorized', 403);
    }

    successResponse(res, user);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create staff account
// @route   POST /api/users/staff
// @access  Private (admin only)
const createStaff = async (req, res) => {
  try {
    const result = createStaffSchema.safeParse(req.body);
    if (!result.success) {
      return errorResponse(res, result.error.errors.map(e => e.message).join(', '), 400);
    }

    const { name, email, password, phone, role } = result.data;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return errorResponse(res, 'Staff with this email already exists', 400);
    }

    const user = await User.create({
      name,
      email,
      password, // Will be hashed by pre-save hook
      phone,
      role // manager, receptionist, housekeeping
    });

    successResponse(res, {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive
    }, 'Staff account created successfully', 201);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update staff account
// @route   PUT /api/users/:id
// @access  Private (admin only)
const updateStaff = async (req, res) => {
  try {
    const result = updateStaffSchema.safeParse(req.body);
    if (!result.success) {
      return errorResponse(res, result.error.errors.map(e => e.message).join(', '), 400);
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return errorResponse(res, 'User not found', 404);
    }

    // Prevent changing role to admin or guest
    if (result.data.role && !['manager', 'receptionist', 'housekeeping'].includes(result.data.role)) {
      return errorResponse(res, 'Invalid role for staff', 400);
    }

    // Update fields
    if (result.data.name) user.name = result.data.name;
    if (result.data.phone) user.phone = result.data.phone;
    if (result.data.role) user.role = result.data.role;
    if (result.data.isActive !== undefined) user.isActive = result.data.isActive;

    // Handle password update
    if (result.data.password) {
      user.password = result.data.password; // Will be hashed by pre-save
    }

    await user.save();

    successResponse(res, {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive
    }, 'Staff updated successfully');
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Deactivate/Activate user (soft delete)
// @route   PATCH /api/users/:id/toggle-active
// @access  Private (admin only)
const toggleUserActive = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return errorResponse(res, 'User not found', 404);
    }

    // Prevent deactivating self
    if (req.user._id.toString() === req.params.id) {
      return errorResponse(res, 'Cannot deactivate your own account', 400);
    }

    user.isActive = !user.isActive;
    await user.save();

    successResponse(res, {
      _id: user._id,
      isActive: user.isActive
    }, `User ${user.isActive ? 'activated' : 'deactivated'} successfully`);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createStaff,
  updateStaff,
  toggleUserActive
};