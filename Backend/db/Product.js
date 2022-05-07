const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
});

module.exports = mongoose.model('products',productSchema)

/*
"name":"m40",
"price":"684",
"category":"mobile",
"userId":6465465651651654655,
"company":"melonphone"
*/

