// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const hireUsRoutes = require('./routes/hireUsRoutes');

// const app = express();
// const PORT = 5000;


// app.use(cors());
// app.use(express.json());

// app.use('/api/hireus', hireUsRoutes);
// app.get('/', (req, res) => {
//   res.send('Welcome to the HireUs API');
// });

// mongoose.connect('mongodb://localhost:27017/hireus', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('MongoDB connected');
//   app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// }).catch(err => console.error('MongoDB connection error:', err));
