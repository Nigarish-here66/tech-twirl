const express = require('express');
const router = express.Router(); 
const multer = require('multer'); 
const { isAdmin } = require('../middleware/authMiddleware'); 

// Import controller functions for portfolio operations
const {
  getAllPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} = require('../controllers/portfolioController');

// Multer storage setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

// Routes

router.get('/', getAllPortfolios);
router.get('/:id', getPortfolioById);
router.post('/', isAdmin, upload.single('image'), createPortfolio);
router.put('/:id', isAdmin, upload.single('image'), updatePortfolio);
router.delete('/:id', isAdmin, deletePortfolio);

module.exports = router;
