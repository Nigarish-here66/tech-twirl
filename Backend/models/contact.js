const mongoose = require('mongoose');

// Define a new schema for contact form submissions
const contactSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'new' }

}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
