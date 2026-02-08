

// src/controllers/bookingController.js
const Booking = require('../models/booking');
const Room = require('../models/room');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { createBookingSchema, statusUpdateSchema } = require('../validators/bookingValidator');

// Helper: Calculate nights
const calculateNights = (checkIn, checkOut) => {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((checkOut - checkIn) / oneDay));
};

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private (guest or receptionist)
const createBooking = async (req, res) => {
  try {
    const result = createBookingSchema.safeParse(req.body);
    if (!result.success) {
      return errorResponse(res, result.error.errors.map(e => e.message).join(', '), 400);
    }

    const { roomId, checkIn, checkOut, guestDetails, additionalServices = [], notes } = result.data;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      return errorResponse(res, 'checkOut must be after checkIn', 400);
    }

    const room = await Room.findById(roomId);
    if (!room) {
      return errorResponse(res, 'Room not found', 404);
    }

    if (room.status !== 'available') {
      return errorResponse(res, `Room is currently ${room.status}`, 400);
    }

    // Check for overlapping bookings
    const overlappingBooking = await Booking.findOne({
      room: roomId,
      status: { $in: ['confirmed', 'checked-in'] },
      $or: [
        { checkIn: { $lt: checkOutDate }, checkOut: { $gt: checkInDate } }
      ]
    });

    if (overlappingBooking) {
      return errorResponse(res, 'Room is already booked for these dates', 400);
    }

    // Calculate total price
    const nights = calculateNights(checkInDate, checkOutDate);
    const roomCharge = nights * room.pricePerNight;
    const servicesCharge = additionalServices.reduce((sum, service) => sum + service.price, 0);
    const totalPrice = roomCharge + servicesCharge;

    const booking = await Booking.create({
      room: roomId,
      guest: req.user?._id || null, // If logged in as guest
      guestDetails: guestDetails || {
        name: req.user?.name,
        email: req.user?.email,
        phone: req.user?.phone
      },
      checkIn: checkInDate,
      checkOut: checkOutDate,
      additionalServices,
      notes,
      totalPrice,
      status: 'confirmed'
    });

    // Update room status to occupied (optional: only on check-in)
    // room.status = 'occupied';
    // await room.save();

    successResponse(res, booking, 'Booking created successfully', 201);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all bookings (with filters)
// @route   GET /api/bookings
// @access  Private (staff only)
const getBookings = async (req, res) => {
  try {
    const { status, roomId, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) query.status = status;
    if (roomId) query.room = roomId;

    const bookings = await Booking.find(query)
      .populate('room', 'roomNumber type pricePerNight')
      .populate('guest', 'name email')
      .sort({ checkIn: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Booking.countDocuments(query);

    successResponse(res, {
      bookings,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single booking
// @route   GET /api/bookings/:id
// @access  Private
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('room', 'roomNumber type pricePerNight status')
      .populate('guest', 'name email phone');

    if (!booking) {
      return errorResponse(res, 'Booking not found', 404);
    }

    successResponse(res, booking);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update booking status (check-in, check-out, cancel)
// @route   PATCH /api/bookings/:id/status
// @access  Private (receptionist/manager)
const updateBookingStatus = async (req, res) => {
  try {
    const result = statusUpdateSchema.safeParse(req.body);
    if (!result.success) {
      return errorResponse(res, 'Invalid status', 400);
    }

    const { status } = result.data;

    const booking = await Booking.findById(req.params.id).populate('room');
    if (!booking) {
      return errorResponse(res, 'Booking not found', 404);
    }

    const room = booking.room;

    if (status === 'checked-in') {
      if (booking.status !== 'confirmed') {
        return errorResponse(res, 'Only confirmed bookings can be checked in', 400);
      }
      room.status = 'occupied';
    } else if (status === 'checked-out') {
      if (booking.status !== 'checked-in') {
        return errorResponse(res, 'Only checked-in bookings can be checked out', 400);
      }
      room.status = 'cleaning'; // Housekeeping needed
    } else if (status === 'cancelled') {
      if (!['confirmed', 'checked-in'].includes(booking.status)) {
        return errorResponse(res, 'Cannot cancel this booking', 400);
      }
      room.status = 'available'; // Free up room
    }

    booking.status = status;
    await booking.save();
    await room.save();

    successResponse(res, booking, `Booking ${status} successfully`);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingStatus
};