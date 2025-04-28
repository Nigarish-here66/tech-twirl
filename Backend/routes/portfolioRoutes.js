const express = require('express');
const router = express.Router();
const multer = require('multer');
const Portfolio = require('../models/Portfolio');
const { isAdmin } = require('../middleware/authMiddleware');

// chatgpt wrote this , pata nhi ye kya hai
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Public routes
router.get('/', async (req, res) => {
  const portfolios = await Portfolio.find();
  res.json(portfolios);
});

router.get('/:id', async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);
  res.json(portfolio);
});

// Admin-only routes
router.post('/', isAdmin, upload.single('image'), async (req, res) => {
  const { projectName, description, technologies, githubLink, liveDemoLink } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
  
  const portfolio = new Portfolio({
    projectName,
    description,
    technologies: technologies.split(','),
    githubLink,
    liveDemoLink,
    imageUrl
  });

  const created = await portfolio.save();
  res.status(201).json(created);
});

router.put('/:id', isAdmin, upload.single('image'), async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);

  if (portfolio) {
    portfolio.projectName = req.body.projectName || portfolio.projectName;
    portfolio.description = req.body.description || portfolio.description;
    portfolio.technologies = req.body.technologies?.split(',') || portfolio.technologies;
    portfolio.githubLink = req.body.githubLink || portfolio.githubLink;
    portfolio.liveDemoLink = req.body.liveDemoLink || portfolio.liveDemoLink;
    if (req.file) portfolio.imageUrl = `/uploads/${req.file.filename}`;
    const updated = await portfolio.save();
    res.json(updated);
  } else {
    res.status(404).json({ message: 'Portfolio not found' });
  }
});

router.delete('/:id', isAdmin, async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);

  if (portfolio) {
    await portfolio.remove();
    res.json({ message: 'Deleted successfully' });
  } else {
    res.status(404).json({ message: 'Portfolio not found' });
  }
});

module.exports = router;
