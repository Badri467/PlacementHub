const jwt = require('jsonwebtoken');
const db = require('../config/db');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      throw new Error('Authorization token missing');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const [users] = await db.query(
      `SELECT id, name, email, role 
       FROM users WHERE id = ?`,
      [decoded.id]
    );
    
    if (users.length === 0) {
      throw new Error('User not found');
    }

    req.user = users[0];
    next();
  } catch (error) {
    res.status(401).json({ 
      error: 'Authentication required',
      message: error.message 
    });
  }
};