const mongoose = require('mongoose');

const userPortfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  education: { type: String },
  skills: [{ type: String }], // Array of skills
  experience: { type: String },
  portfolioLink: { type: String },
  cvLink: { type: String }, // Optional CV link
}, { timestamps: true });

module.exports = mongoose.model('UserPortfolio', userPortfolioSchema);
