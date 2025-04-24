const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const hireUsRoutes = require('./routes/hireUsRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


app.use('/api/hireus', hireUsRoutes);
app.use('/api/contact', contactRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the combined API for HireUs and ContactUs');
});


const MONGO_URI = 'mongodb://localhost:27017/techtwirl';


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the techtwirl database');

 
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error('MongoDB connection error:', err));
