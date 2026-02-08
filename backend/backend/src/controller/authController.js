

// src/controllers/authController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { registerSchema, loginSchema } = require('../validators/authValidator');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// @desc    Register user (Admin can create staff)
// @route   POST /api/auth/register
const register = async (req, res) => {
  try {
    const result = registerSchema.safeParse(req.body);
    if (!result.success) {
      return errorResponse(res, result.error.issues.map(e => e.message).join(', '), 400);
    }

    const { name, email, password, phone, role } = result.data;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return errorResponse(res, 'User already exists with this email', 400);
    }

    // Only admin can create staff roles, guests can register themselves
    // Allow first admin to be created without authentication
    const adminCount = await User.countDocuments({ role: 'admin' });
    if (role && role !== 'guest' && adminCount > 0 && (!req.user || req.user.role !== 'admin')) {
      return errorResponse(res, 'Not authorized to create staff account', 403);
    }

    const user = await User.create({
      name,
      email,
      password,
      phone,
      role: role || 'guest'
    });

    const token = generateToken(user._id);

    // Set HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: parseInt(process.env.JWT_COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
    });

    successResponse(res, {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }, 'User registered successfully', 201);

  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
const login = async (req, res) => {
  try {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      return errorResponse(res, result.error.errors.map(e => e.message).join(', '), 400);
    }

    const { email, password } = result.data;

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      return errorResponse(res, 'Invalid email or password', 401);
    }

    if (!user.isActive) {
      return errorResponse(res, 'Account is deactivated', 401);
    }

    const token = generateToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: parseInt(process.env.JWT_COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
    });

    successResponse(res, {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }, 'Login successful');

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
const getMe = async (req, res) => {
  successResponse(res, req.user);
};

// @desc    Logout
// @route   POST /api/auth/logout
const logout = (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  successResponse(res, null, 'Logged out successfully');
};

module.exports = { register, login, getMe, logout };