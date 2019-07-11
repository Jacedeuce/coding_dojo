const User = require("./models")

module.exports = {
    index : (req, res)=>{
        res.render('index')
    },
    users : (req, res)=>{
        console.log("POSTDATA", req.body)

        var user = new User({name: req.body.name, age: req.body.age});
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        user.save(function(err) {
          // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user!');
            }

        res.redirect('/')
        })
    }
}
