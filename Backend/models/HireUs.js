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

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await HireUs.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await HireUs.findByIdAndDelete(req.params.id);
    res.json({ message: 'Request deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
