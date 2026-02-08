

// src/validators/maintenanceValidator.js
const { z } = require('zod');

const createMaintenanceSchema = z.object({
  roomId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid room ID'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  type: z.enum(['plumbing', 'electrical', 'furniture', 'cleanliness', 'appliance', 'other']).optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
  images: z.array(z.string().url()).optional()
});

const updateMaintenanceSchema = z.object({
  status: z.enum(['in-progress', 'resolved']),
  notes: z.string().optional()
});

module.exports = { createMaintenanceSchema, updateMaintenanceSchema };