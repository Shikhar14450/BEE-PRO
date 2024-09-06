// routes/index.js
const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// Home route
router.get('/', stockController.getHomePage);

// Stock details route
router.get('/stock/:id', stockController.getStockPage);


module.exports = router;
