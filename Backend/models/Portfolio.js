const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String }],
  githubLink: { type: String },
  liveDemoLink: { type: String },
  imageUrl: { type: String },
  category: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);