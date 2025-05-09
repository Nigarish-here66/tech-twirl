const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth');

// Hardcoded admin credentials
const ADMIN_USERNAME = 'techtwirl';
const ADMIN_PASSWORD = 'admin';

// Admin login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({
      success: true,
      message: 'Login successful',
      username: ADMIN_USERNAME
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route
router.get('/protected', isAdmin, (req, res) => {
  res.json({ message: 'Access granted to protected admin route.' });
});

module.exports = router;
