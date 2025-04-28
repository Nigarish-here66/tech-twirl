const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


const ADMIN_USERNAME = 'techtwirl';
const ADMIN_PASSWORD = 'admin';

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ isAdmin: true }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
