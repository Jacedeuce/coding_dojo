const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/message_board_db')

var CommentSchema = new mongoose.Schema({
    name : { type: String, required : true, minlength: 2 },
    comment : { type: String, required : true, minlength : 5 }
}, { timestamps : true })

var MessageSchema = new mongoose.Schema({
    name : { type : String, required : true, minlength : 2 },
    message : { type : String, require : true, minlength : 5 },
    comments : [CommentSchema]
}, { timestamps : true })

module.exports = {
    "Message" : mongoose.model('Message', MessageSchema),
    "Comment" : mongoose.model('Comment', CommentSchema),
}