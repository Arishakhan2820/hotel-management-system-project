// src/models/Room.js
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: ['single', 'double', 'suite', 'deluxe'],
    required: true
  },
  pricePerNight: { type: Number, required: true },
  amenities: [String],
  status: {
    type: String,
    enum: ['available', 'occupied', 'cleaning', 'maintenance'],
    default: 'available'
  },
  images: [String],
  floor: Number,
  maxOccupancy: Number
}, { timestamps: true });

// Indexes for performance
roomSchema.index({ status: 1 });
roomSchema.index({ type: 1 });

module.exports = mongoose.model('Room', roomSchema);