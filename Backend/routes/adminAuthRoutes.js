const express = require('express');
const router = express.Router();

const ADMIN_USERNAME = 'techtwirl';
const ADMIN_PASSWORD = 'admin';

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // No JWT - just return success with admin credentials
    res.json({ 
      success: true,
      message: 'Login successful',
      username: ADMIN_USERNAME
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
