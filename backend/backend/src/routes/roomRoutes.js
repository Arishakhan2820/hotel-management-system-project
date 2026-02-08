

// src/routes/roomRoutes.js
const express = require('express');
const {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  updateRoomStatus,
  getAvailableRooms
} = require('../controller/roomController');

const { protect } = require('../middlewares/auth');
const roleCheck = require('../middlewares/roleCheck');

const router = express.Router();

// Public/Guest accessible
router.get('/availability', getAvailableRooms);

// Protected routes
router.use(protect);

router.get('/', getRooms);
router.get('/:id', getRoomById);

// Manager/Admin only
router.post('/', roleCheck('admin', 'manager'), createRoom);
router.put('/:id', roleCheck('admin', 'manager'), updateRoom);
router.delete('/:id', roleCheck('admin'), deleteRoom);

// Reception & Housekeeping can update status
router.patch('/:id/status', roleCheck('receptionist', 'housekeeping', 'manager', 'admin'), updateRoomStatus);

module.exports = router;