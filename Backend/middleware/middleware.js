const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.json());
  app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
};