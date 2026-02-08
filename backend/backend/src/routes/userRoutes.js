// src/routes/userRoutes.js
const express = require('express');
const {
  getUsers,
  getUserById,
  createStaff,
  updateStaff,
  toggleUserActive
} = require('../controller/userController');

const { protect } = require('../middlewares/auth');
const roleCheck = require('../middlewares/roleCheck');

const router = express.Router();

// All routes protected
router.use(protect);

// Manager & Admin can view users
router.get('/', roleCheck('admin', 'manager'), getUsers);
router.get('/:id', roleCheck('admin', 'manager'), getUserById);

// Admin only for staff management
router.post('/staff', roleCheck('admin'), createStaff);
router.put('/:id', roleCheck('admin'), updateStaff);
router.patch('/:id/toggle-active', roleCheck('admin'), toggleUserActive);

module.exports = router;