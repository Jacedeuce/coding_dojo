const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/quotes_db')

var QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    quote: { type: String, required: true, minlength: 5},
}, 
{timestamps : true})

module.exports = mongoose.model('Quote', QuoteSchema)