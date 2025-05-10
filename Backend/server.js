const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const applyMiddleware = require('./middleware/middleware');
const portfolioRoutes = require('./routes/portfolioRoutes');
const hireusRoutes = require('./routes/hireUsRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


applyMiddleware(app);


const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

app.use('/api/hireus', hireusRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('http://localhost:5000/api/portfolio', portfolioRoutes);

app.get('/', (req, res) => res.send('TechTwirl API Root'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/techtwirl')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
