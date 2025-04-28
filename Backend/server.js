const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Import routes
const portfolioRoutes = require('./routes/portfolioRoutes');
const hireUsRoutes = require('./routes/hireUsRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userPortfolioRoutes = require('./routes/userPortfolioRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/portfolios', portfolioRoutes);
app.use('/api/hireus', hireUsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/userportfolios', userPortfolioRoutes);
app.use('/api/admin', adminAuthRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the TechTwirl Combined API (Portfolio, UserPortfolios, HireUs, ContactUs)');
});

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/techtwirl';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the techtwirl database');

  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error('MongoDB connection error:', err));
