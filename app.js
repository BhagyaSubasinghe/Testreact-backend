const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api', router);

module.exports = app;