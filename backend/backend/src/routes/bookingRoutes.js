
// src/routes/bookingRoutes.js
const express = require('express');
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingStatus
} = require('../controller/bookingController');

const { protect } = require('../middlewares/auth');
const roleCheck = require('../middlewares/roleCheck');

const router = express.Router();

// Guests can create bookings (if authenticated), or receptionist on behalf
router.post('/', protect, createBooking);

// Staff routes
router.use(protect);

router.get('/', roleCheck('admin', 'manager', 'receptionist'), getBookings);
router.get('/:id', getBookingById);

// Only receptionist/manager can update status
router.patch('/:id/status', roleCheck('receptionist', 'manager', 'admin'), updateBookingStatus);

module.exports = router;