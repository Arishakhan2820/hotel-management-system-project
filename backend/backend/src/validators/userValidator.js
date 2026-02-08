
// src/validators/userValidator.js
const { z } = require('zod');

const createStaffSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters').optional(), // Optional if admin sets later
  phone: z.string().optional(),
  role: z.enum(['manager', 'receptionist', 'housekeeping'])
});

const updateStaffSchema = createStaffSchema.partial().extend({
  password: z.string().min(6).optional(),
  isActive: z.boolean().optional()
});

module.exports = { createStaffSchema, updateStaffSchema };