
// src/validators/bookingValidator.js
const { z } = require('zod');

const createBookingSchema = z.object({
  roomId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid room ID'),
  checkIn: z.string().datetime('Invalid checkIn date (ISO format)'),
  checkOut: z.string().datetime('Invalid checkOut date (ISO format)'),
  guestDetails: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional()
  }).optional(),
  additionalServices: z.array(
    z.object({
      name: z.string(),
      price: z.number().positive()
    })
  ).optional(),
  notes: z.string().optional()
});

const statusUpdateSchema = z.object({
  status: z.enum(['checked-in', 'checked-out', 'cancelled'])
});

module.exports = { createBookingSchema, statusUpdateSchema };