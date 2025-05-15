// Import the Portfolio model
const Portfolio = require('../models/Portfolio');

// Get all portfolios
exports.getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching portfolios', error: err });
  }
};

// Get single portfolio by ID
exports.getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching portfolio', error: err });
  }
};

// Create a new portfolio
exports.createPortfolio = async (req, res) => {
  try {
    const { projectName, description, technologies, githubLink, liveDemoLink } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    const portfolio = new Portfolio({
      projectName,
      description,
      technologies: technologies.split(',').map(t => t.trim()),
      githubLink,
      liveDemoLink,
      imageUrl,
    });

    // Save the new portfolio to the database
    const created = await portfolio.save();
    res.status(201).json(created);
  } catch (err) {
    res.status(500).json({ message: 'Error creating portfolio', error: err });
  }
};

// Update an existing portfolio by ID
exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });

    portfolio.projectName = req.body.projectName || portfolio.projectName;
    portfolio.description = req.body.description || portfolio.description;
    portfolio.technologies = req.body.technologies?.split(',').map(t => t.trim()) || portfolio.technologies;
    portfolio.githubLink = req.body.githubLink || portfolio.githubLink;
    portfolio.liveDemoLink = req.body.liveDemoLink || portfolio.liveDemoLink;

    if (req.file) portfolio.imageUrl = `/uploads/${req.file.filename}`;
    const updated = await portfolio.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating portfolio', error: err });
  }
};

// Delete a portfolio by ID
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting portfolio', error: err });
  }
};
