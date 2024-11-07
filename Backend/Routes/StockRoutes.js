const express = require('express');
const stockController = require('../Controllers/StockController');

const router = express.Router();

router.get('/stocks', stockController.getFilteredStocks);

module.exports = router;