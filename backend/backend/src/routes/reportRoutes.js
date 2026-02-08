
// src/routes/reportRoutes.js
const express = require('express');
const {
  getOverview,
  getOccupancyTrend,
  getRevenueByRoomType,
  getMonthlyRevenue
} = require('../controller/reportController');

const { protect } = require('../middlewares/auth');
const roleCheck = require('../middlewares/roleCheck');

const router = express.Router();

router.use(protect);
router.use(roleCheck('admin', 'manager'));

router.get('/overview', getOverview);
router.get('/occupancy-trend', getOccupancyTrend);
router.get('/revenue-by-type', getRevenueByRoomType);
router.get('/monthly-revenue', getMonthlyRevenue);

module.exports = router;