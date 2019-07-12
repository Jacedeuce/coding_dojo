const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/quotes_db')

var BeaverSchema = new mongoose.Schema({
    name: { type: String, required : true, minlength: 2 },
    tail: { type: Number, required : true },
    dam : { type: String, required : true, minlength : 2 },
},
{ timestamps : true })

module.exports = mongoose.model('Beaver', BeaverSchema)