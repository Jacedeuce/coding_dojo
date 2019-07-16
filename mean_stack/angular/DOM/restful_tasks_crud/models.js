const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/restful_task_db')

var TaskSchema =  new mongoose.Schema({
    title : {type: String, required : true},
    description : {type : String, default : ""},
    completed : {type : Boolean, default : false}
}, {timestamps : {createdAt : "created_at", updatedAt : "updated_at"}}
)
  
module.exports = mongoose.model('Task', TaskSchema)