// controllers/stockController.js
const Stock = require('../models/stock');

exports.getHomePage = async (req, res) => {
    try {
        const stocks = await Stock.find(); // Fetch stocks from DB
        res.render('index', { title: 'Home', stocks });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getStockPage = async (req, res) => {
    try {
        const stockId = req.params.id;
        const stock = await Stock.findById(stockId);
        res.render('stockpage', { title: 'Stock Details', stock });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
