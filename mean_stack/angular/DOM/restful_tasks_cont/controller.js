const Task = require("./models")

module.exports = {
    tasks : (req, res) => {
        Task.find({}, function(err, tasks) {
            if (err) {
                console.log(err)
            } else {
                res.json({'tasks':tasks})
            }
        })
    },
    show : (req, res) => {
        Task.findOne({_id : req.params.id}, function(err, task){
            if (err) {
                console.log(err)
            } else {
                res.json({'task': task})
            }
        })    
    },
    create : (req, res) => {
        console.log(req.body)
        Task.create(req.body, function(err, task){
            if (err) {
                console.log(err)
            } else {
                res.json({message: "created", "task" : task})
            }

        })
    },
    update : (req, res) => {
        Task.findByIdAndUpdate({_id : req.params.id}, req.body, function(err, task){
            if (err) {
                console.log(err)
            } else {
                res.json({message: "updated", "task" : task})
            }
        })
    },
    delete : (req, res) => {
        Task.findByIdAndDelete({_id : req.params.id}, req.body, function(err, task){
            if (err) {
                console.log(err)
            } else {
                res.json({message: "deleted", "task" : task})
            }
        })
    }
}