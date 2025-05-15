const mongoose = require('mongoose');

// Define a schema for user portfolio submissions
const userPortfolioSchema = new mongoose.Schema({
 
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  education: { type: String },
  skills: [{ type: String }],
  experience: { type: String },
  portfolioLink: { type: String },
  cvLink: { type: String }

}, { timestamps: true });

module.exports = mongoose.model('UserPortfolio', userPortfolioSchema);
