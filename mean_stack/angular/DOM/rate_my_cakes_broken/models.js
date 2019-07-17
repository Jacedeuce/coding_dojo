const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cakes_db')

mongoose.set('useFindAndModify', false);

var RatingSchema = new mongoose.Schema({
    stars : { type : Number, require: true },
    comment : { type: String, require: true, minlength: 5 }
}, { timestamps: true })

var CakeSchema = new mongoose.Schema({
    name : { type: String, require: true, minlength: 2 },
    image_url : { type: String, require: true },
    ratings : [RatingSchema]
}, { timestamps : true })

var BakerSchema = new mongoose.Schema({
    full_name : { type: String, require : true, minlength: 2 },
    cakes : [CakeSchema]
}, { timestamps : true })

module.exports = {
    "Rating" : mongoose.model('Rating', RatingSchema),
    "Cake" : mongoose.model('Cake', CakeSchema),
    "Baker" : mongoose.model('Baker', BakerSchema),
}