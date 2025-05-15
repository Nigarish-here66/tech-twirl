const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// ===========================
// CREATE a new contact request
// ===========================
router.post('/', async (req, res) => {
  try {
    console.log("Request Body:", req.body); 
    const contactRequest = new Contact(req.body);
    await contactRequest.save();
    res.status(201).json(contactRequest);
  } catch (err) {   
    console.error("Error during save:", err.message); 
    res.status(400).json({ error: err.message });
  }

});

// ===========================
// READ all contact requests
// ===========================
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
