const express = require('express');
const router = express.Router();
const multer = require('multer');
const { isAdmin } = require('../middleware/middleware');
const portfolioController = require('../controllers/portfolioController');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Public routes
router.get('/', portfolioController.getAllPortfolios);
router.get('/:id', portfolioController.getPortfolioById);

// Admin-only routes
router.post('/', isAdmin, upload.single('image'), portfolioController.createPortfolio);
router.put('/:id', isAdmin, upload.single('image'), portfolioController.updatePortfolio);
router.delete('/:id', isAdmin, portfolioController.deletePortfolio);

module.exports = router;
