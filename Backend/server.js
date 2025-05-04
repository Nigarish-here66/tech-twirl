const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const applyMiddleware = require('./middleware'); // Apply custom middleware
const portfolioRoutes = require('./routes/portfolioRoutes');
const hireUsRoutes = require('./routes/hireUsRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userPortfolioRoutes = require('./routes/userPortfolioRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');
const path = require('path');

dotenv.config(); // Load env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Apply middleware
applyMiddleware(app);

// Route Definitions
app.use('/api/portfolios', portfolioRoutes);
app.use('/api/hireus', hireUsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/userportfolios', userPortfolioRoutes);
app.use('/api/admin', adminAuthRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the TechTwirl Combined API (Portfolio, UserPortfolios, HireUs, ContactUs)');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
