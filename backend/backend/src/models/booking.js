// src/models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  guestDetails: {
    name: String,
    email: String,
    phone: String
  },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  status: {
    type: String,
    enum: ['confirmed', 'checked-in', 'checked-out', 'cancelled'],
    default: 'confirmed'
  },
  totalPrice: Number,
  additionalServices: [{
    name: String,
    price: Number
  }],
  notes: String
}, { timestamps: true });

// Critical index for availability check
bookingSchema.index({ room: 1, checkIn: 1, checkOut: 1 });
bookingSchema.index({ status: 1 });

module.exports = mongoose.model('Booking', bookingSchema);