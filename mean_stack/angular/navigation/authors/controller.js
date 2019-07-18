const Author = require("./models")

module.exports = {
    authors : (req, res) => {
        Author.find({}, function(err, authors) {
            if(err) {
                console.log(err)
                res.json({'message' : "error", "error" : err})
            } else {
                res.json({'message' : 'success', 'authors' : authors})
            }
        })
    },
    author : (req, res) => {
        Author.findOne({_id: req.params.id}, function(err, author){
            if(err) {
                console.log(err)
                res.json({'message' : "error", "error" : err})
            } else {
                res.json({'message' : 'success', 'author' : author})
            }
        })
    },
    create : (req, res) => {
        Author.create(req.body, function(err, new_author){
            if(err) {
                console.log(err)
                res.json({'message' : "error", "error" : err})
            } else {
                console.log('created author')
                res.json({'message' : 'success', 'new_author' : new_author})
            }
        })
    },
    update : (req, res) => {
        console.log('updating author')
        Author.findByIdAndUpdate({_id : req.params.id}, req.body, {new: true}, function(err, updated_author){  //https://stackoverflow.com/questions/30419575/mongoose-findbyidandupdate-not-returning-correct-model
            if(err) {
                console.log(err)
                res.json({'message' : "error", "error" : err})
            } else {
                console.log('author updated')
                res.json({'message' : 'success', 'updated_author' : updated_author})
            }
        })
    },
    delete : (req, res) => {
        Author.findByIdAndDelete({_id : req.params.id}, req.body, function(err, deleted){
            if(err) {
                console.log(err)
                res.json({'message' : "error", "error" : err})
            } else {
                res.json({'message' : 'success', 'deleted' : deleted})
            }
        })
    },
    all : (req, res) => {
        res.redirect('/')
    }
}