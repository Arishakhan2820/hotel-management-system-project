
// src/routes/maintenanceRoutes.js
const express = require('express');
const {
  reportMaintenance,
  getMaintenanceRequests,
  updateMaintenanceStatus,
  getCleaningTasks
} = require('../controller/maintenanceController');

const { protect } = require('../middlewares/auth');
const roleCheck = require('../middlewares/roleCheck');

const router = express.Router();

// Anyone logged in can report issue
router.post('/', protect, reportMaintenance);

// Housekeeping dashboard: cleaning tasks
router.get('/cleaning-tasks', protect, roleCheck('housekeeping', 'manager', 'admin'), getCleaningTasks);

// Staff management views
router.get('/', protect, roleCheck('housekeeping', 'manager', 'admin'), getMaintenanceRequests);
router.patch('/:id', protect, roleCheck('housekeeping', 'manager', 'admin'), updateMaintenanceStatus);

module.exports = router;