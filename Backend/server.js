const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
require('dotenv').config(); // Load environment variables from .env file

// Import custom modules
const portfolioRoutes = require('./routes/portfolioRoutes');
const hireUsRoutes = require('./routes/hireUsRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userPortfolioRoutes = require('./routes/userPortfolioRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');
const applyMiddleware = require('./middleware/middleware'); 

// ==============================
// Ensure 'uploads' Directory Exists
// ==============================
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// ==============================
// Initialize Express App
// ==============================
const app = express();
const PORT = process.env.PORT || 5000;

// ==============================
// Middleware 
// ==============================
applyMiddleware(app);

// ==============================
// API Routes
// ==============================
app.use('/api/portfolios', portfolioRoutes);        
app.use('/api/hireus', hireUsRoutes);              
app.use('/api/contact', contactRoutes);            
app.use('/api/userportfolios', userPortfolioRoutes); 
app.use('/api/admin', adminAuthRoutes);            

// Root route 
app.get('/', (req, res) => {
  res.send('Welcome to the TechTwirl Combined API (Portfolio, UserPortfolios, HireUs, ContactUs)');
});

// ==============================
// MongoDB Connection
// ==============================
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/techtwirl';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to the techtwirl database');

    // Start the server only after successful DB connection
    app.listen(PORT, () => 
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
