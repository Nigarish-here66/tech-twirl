const express = require('express');
const router = express.Router();
const HireUs = require('../models/HireUs');

// CREATE
router.post('/', async (req, res) => {
  try {
    const hireRequest = new HireUs(req.body);
    await hireRequest.save();
    res.status(201).json(hireRequest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const requests = await HireUs.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
