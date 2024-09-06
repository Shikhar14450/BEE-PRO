// models/stockModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
    sname: {
        type: String,
        required:true
    },
    purchaseprice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: { type: Date, default: Date.now }
},{ timestamps: true});

const Stock = mongoose.model('Stock',stockSchema)
module.exports = Stock;
