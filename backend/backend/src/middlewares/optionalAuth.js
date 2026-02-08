// src/middlewares/optionalAuth.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const optionalAuth = async (req, res, next) => {
    let token;

    // Check for token in cookies or Authorization header
    if (req.cookies.token) {
        token = req.cookies.token;
    } else if (req.headers.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // If no token, proceed without setting req.user (Guest)
    if (!token) {
        return next();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        // If token exists but invalid user, we might just ignore or let it be (treated as guest)
        // But usually better to let the controller decide.
        // Here we just attach user if valid.
        next();
    } catch (error) {
        // If token is invalid (expired), we treat as guest
        next();
    }
};

module.exports = { optionalAuth };
