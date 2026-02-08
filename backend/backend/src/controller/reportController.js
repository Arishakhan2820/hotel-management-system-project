
// src/controllers/reportController.js
const Booking = require('../models/booking');
const Room = require('../models/room');
const { successResponse, errorResponse } = require('../utils/apiResponse');

// Helper: Get date range
const getDateRange = (period) => {
  const end = new Date();
  let start;

  if (period === 'today') {
    start = new Date(end);
    start.setHours(0, 0, 0, 0);
  } else if (period === 'week') {
    start = new Date(end);
    start.setDate(end.getDate() - 7);
  } else if (period === 'month') {
    start = new Date(end);
    start.setMonth(end.getMonth() - 1);
  } else if (period === 'year') {
    start = new Date(end);
    start.setFullYear(end.getFullYear() - 1);
  } else {
    // Default: last 30 days
    start = new Date(end);
    start.setDate(end.getDate() - 30);
  }

  return { start, end };
};

// @desc    Get dashboard overview stats
// @route   GET /api/reports/overview?period=month
// @access  Private (manager/admin)
const getOverview = async (req, res) => {
  try {
    const { period = 'month' } = req.query;
    const { start, end } = getDateRange(period);

    const totalRooms = await Room.countDocuments();

    const completedBookings = await Booking.find({
      status: 'checked-out',
      checkOut: { $gte: start, $lte: end }
    });

    const totalRevenue = completedBookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0);

    const occupiedNights = completedBookings.reduce((sum, b) => {
      const nights = Math.ceil((new Date(b.checkOut) - new Date(b.checkIn)) / (24 * 60 * 60 * 1000));
      return sum + nights;
    }, 0);

    const availableNights = totalRooms * ((end - start) / (24 * 60 * 60 * 1000));

    const occupancyRate = availableNights > 0 ? (occupiedNights / availableNights) * 100 : 0;
    const adr = completedBookings.length > 0 ? totalRevenue / occupiedNights : 0;
    const revpar = availableNights > 0 ? totalRevenue / availableNights : 0;

    const currentOccupancy = await Booking.countDocuments({
      status: { $in: ['confirmed', 'checked-in'] },
      checkIn: { $lte: end },
      checkOut: { $gt: new Date() }
    });

    successResponse(res, {
      period,
      totalRevenue: Math.round(totalRevenue),
      occupancyRate: occupancyRate.toFixed(2),
      adr: Math.round(adr),
      revpar: Math.round(revpar),
      currentOccupiedRooms: currentOccupancy,
      totalRooms,
      totalBookings: completedBookings.length
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get occupancy trend (daily for last 30 days or monthly)
// @route   GET /api/reports/occupancy-trend?type=daily
// @access  Private
const getOccupancyTrend = async (req, res) => {
  try {
    const { type = 'daily' } = req.query; // daily or monthly

    const totalRooms = await Room.countDocuments();
    if (totalRooms === 0) {
      return successResponse(res, { trend: [] });
    }

    let groupFormat;
    let projectFormat;

    if (type === 'monthly') {
      groupFormat = { $dateToString: { format: '%Y-%m', date: '$checkIn' } };
      projectFormat = '%Y-%m';
    } else {
      groupFormat = { $dateToString: { format: '%Y-%m-%d', date: '$checkIn' } };
      projectFormat = '%Y-%m-%d';
    }

    const trend = await Booking.aggregate([
      {
        $match: {
          status: { $in: ['confirmed', 'checked-in', 'checked-out'] },
          checkIn: { $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) } // Last year
        }
      },
      {
        $group: {
          _id: groupFormat,
          occupiedNights: {
            $sum: {
              $divide: [
                { $subtract: ['$checkOut', '$checkIn'] },
                24 * 60 * 60 * 1000
              ]
            }
          }
        }
      },
      {
        $project: {
          date: '$_id',
          occupancyRate: {
            $round: [
              { $multiply: [{ $divide: ['$occupiedNights', totalRooms] }, 100] },
              2
            ]
          }
        }
      },
      { $sort: { date: 1 } }
    ]);

    successResponse(res, { trend, totalRooms });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get revenue by room type
// @route   GET /api/reports/revenue-by-type
// @access  Private
const getRevenueByRoomType = async (req, res) => {
  try {
    const { period = 'month' } = req.query;
    const { start, end } = getDateRange(period);

    const revenueByType = await Booking.aggregate([
      {
        $match: {
          status: 'checked-out',
          checkOut: { $gte: start, $lte: end }
        }
      },
      {
        $lookup: {
          from: 'rooms',
          localField: 'room',
          foreignField: '_id',
          as: 'roomDetails'
        }
      },
      { $unwind: '$roomDetails' },
      {
        $group: {
          _id: '$roomDetails.type',
          totalRevenue: { $sum: '$totalPrice' },
          bookings: { $sum: 1 }
        }
      },
      {
        $project: {
          type: '$_id',
          totalRevenue: { $round: ['$totalRevenue', 0] },
          bookings: 1,
          _id: 0
        }
      },
      { $sort: { totalRevenue: -1 } }
    ]);

    successResponse(res, { revenueByType });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get monthly revenue trend
// @route   GET /api/reports/monthly-revenue
// @access  Private
const getMonthlyRevenue = async (req, res) => {
  try {
    const monthlyRevenue = await Booking.aggregate([
      {
        $match: {
          status: 'checked-out',
          checkOut: { $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$checkOut' },
            month: { $month: '$checkOut' }
          },
          revenue: { $sum: '$totalPrice' }
        }
      },
      {
        $project: {
          date: { $dateFromParts: { year: '$_id.year', month: '$_id.month', day: 1 } },
          revenue: { $round: ['$revenue', 0] }
        }
      },
      { $sort: { date: 1 } }
    ]);

    successResponse(res, { monthlyRevenue });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getOverview,
  getOccupancyTrend,
  getRevenueByRoomType,
  getMonthlyRevenue
};