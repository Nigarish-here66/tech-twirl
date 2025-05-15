const express = require('express');
const router = express.Router();
const UserPortfolio = require('../models/UserPortfolio'); 
const { isAdmin } = require('../middleware/authMiddleware'); 

// ==============================
// Route: POST /
// Description: User submits their portfolio
// Access: Public
// ==============================
router.post('/', async (req, res) => {
  const { name, email, phone, education, skills, experience, portfolioLink, cvLink } = req.body;

  try {
    const newPortfolio = new UserPortfolio({
      name,
      email,
      phone,
      education,
      skills: skills.split(','), 
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

// ==============================
// Route: GET /
// Description: Admin fetches all user portfolios
// Access: Admin only
// ==============================
router.get('/', isAdmin, async (req, res) => {
  try {
    const portfolios = await UserPortfolio.find();
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==============================
// Route: DELETE /:id
// Description: Admin deletes a user portfolio by ID
// Access: Admin only
// ==============================
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const portfolio = await UserPortfolio.findById(req.params.id);
    if (portfolio) {
      await UserPortfolio.findByIdAndDelete(req.params.id);
      res.json({ message: 'Portfolio deleted' });
    } else {
      res.status(404).json({ message: 'Portfolio not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
