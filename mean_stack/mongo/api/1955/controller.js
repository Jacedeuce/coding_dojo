const Name = require("./models")

module.exports = {
    index : (req, res) => {
        Name.find({}, function(err, names){
            if (err){
                console.log("error retrieving names")
                res.send("there was an error retrieving names")
            } else {
                console.log("sending names")
                res.json(names)
            }
        })
    },
    new_name : (req, res) => {
        Name.create({'name' : req.params.name}, function(err, name){
            if (err) {
                console.log(err)
                res.redirect('/')
            } else {
                console.log('name created')
                res.redirect('/')
            }
        })
    },
    remove : (req, res) => {
        Name.deleteOne({ 'name' : req.params.name}, function(err, name){
            if (err) {
                console.log(`${req.params.name} not deleted`)
                res.redirect('/')
            } else {
                console.log(`${req.params.name} deleted`)
                res.redirect('/')
            }
        })
    },
    show : (req, res) => {
        Name.find({'name' : req.params.name}, function(err, name){
            if (err) { 
                console.log('could not find name')
            } else {
                console.log("name retrieved")
                res.json(name)
            }
        })
    }
}