
// src/validators/roomValidator.js
const { z } = require('zod');

const createRoomSchema = z.object({
  roomNumber: z.string().min(1, 'Room number is required'),
  type: z.enum(['single', 'double', 'suite', 'deluxe']),
  pricePerNight: z.number().positive('Price must be positive'),
  amenities: z.array(z.string()).optional(),
  floor: z.number().optional(),
  maxOccupancy: z.number().int().positive().optional(),
  images: z.array(z.string().url()).optional()
});

const updateRoomSchema = createRoomSchema.partial(); // All fields optional for update

const availabilitySchema = z.object({
  checkIn: z.string().datetime('Invalid checkIn date'),
  checkOut: z.string().datetime('Invalid checkOut date'),
  type: z.enum(['single', 'double', 'suite', 'deluxe']).optional()
});

module.exports = { createRoomSchema, updateRoomSchema, availabilitySchema };