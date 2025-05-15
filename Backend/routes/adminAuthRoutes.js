const express = require('express');
const router = express.Router();

// Admin credentials 
const ADMIN_USERNAME = 'techtwirl';
const ADMIN_PASSWORD = 'admin';

// Route to handle admin login
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


module.exports = router;
