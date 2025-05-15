const mongoose = require('mongoose');

// Define a schema for "Hire Us" form submissions
const hireUsSchema = new mongoose.Schema({
  
  name: String,
  email: String,
  subject: String,
  service: String,
  message: String,

  // Status of the inquiry, defaulting to 'pending'
  status: { type: String, default: 'pending' }

}, { timestamps: true });


module.exports = mongoose.model('HireUs', hireUsSchema);
