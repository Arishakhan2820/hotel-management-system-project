
// src/routes/authRoutes.js
const express = require('express');
const { register, login, getMe, logout } = require('../controller/authController');
const { optionalAuth } = require('../middlewares/optionalAuth');
const { protect } = require('../middlewares/auth');
const roleCheck = require('../middlewares/roleCheck');

const router = express.Router();

// Public routes
router.post('/register', optionalAuth, register);
router.post('/login', login);
router.post('/logout', logout);

// Protected routes
router.get('/me', protect, getMe);

// Example: Only admin can register staff
// router.post('/register', protect, roleCheck('admin'), register);

module.exports = router;