// src/models/Maintenance.js
const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  reportedBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  }, // Staff or Guest
  description: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['plumbing', 'electrical', 'furniture', 'cleanliness', 'appliance', 'other'],
    default: 'other'
  },
  status: { 
    type: String, 
    enum: ['open', 'in-progress', 'resolved'],
    default: 'open'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  images: [String], // Optional photos from guest/staff
  resolvedAt: Date,
  notes: String // Resolution notes
}, { timestamps: true });

// Indexes for performance
maintenanceSchema.index({ room: 1 });
maintenanceSchema.index({ status: 1 });
maintenanceSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Maintenance', maintenanceSchema);