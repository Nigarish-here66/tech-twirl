const mongoose = require('mongoose');

const hireUsSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  service: String,
  message: String,
  status: { type: String, default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('HireUs', hireUsSchema);
