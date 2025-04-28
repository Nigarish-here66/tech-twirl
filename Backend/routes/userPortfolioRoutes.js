const express = require('express');
const router = express.Router();
const UserPortfolio = require('../models/Portfolio');
const { isAdmin } = require('../middleware/authMiddleware');

// User submits portfolio
router.post('/', async (req, res) => {
  const { name, email, phone, education, skills, experience, portfolioLink, cvLink } = req.body;
  try {
    const newPortfolio = new UserPortfolio({
      name,
      email,
      phone,
      education,
      skills: skills.split(','), // Accept comma separated
      experience,
      portfolioLink,
      cvLink
    });

    const created = await newPortfolio.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Admin - fetch all user portfolios
router.get('/', isAdmin, async (req, res) => {
  const portfolios = await UserPortfolio.find();
  res.json(portfolios);
});

// Admin - delete a user portfolio
router.delete('/:id', isAdmin, async (req, res) => {
  const portfolio = await UserPortfolio.findById(req.params.id);

  if (portfolio) {
    await portfolio.remove();
    res.json({ message: 'Portfolio deleted' });
  } else {
    res.status(404).json({ message: 'Portfolio not found' });
  }
});

module.exports = router;
