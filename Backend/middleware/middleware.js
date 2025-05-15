const cors = require('cors');g
const bodyParser = require('body-parser'); 
const express = require('express'); s
const path = require('path'); 

// Export a function to configure middleware on the Express app instance
module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.json());

  // Serve static files from the 'uploads' directory when requests come to '/uploads'
  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
};
