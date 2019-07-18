const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authors_db')

mongoose.set('useFindAndModify', false);

var AuthorSchema = new mongoose.Schema({
    name : {type: String, require: true, minlength: 3}
}, {timestamps : true })

module.exports = mongoose.model('Author', AuthorSchema)