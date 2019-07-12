const Models = require('./models')

module.exports = {
    index : (req, res)=> {
        Models.Message.find({}, function(err, mess){
            if(err){
                for (var key in err.errors){
                    req.flash('mess', err.errors[key].message)
                }
            } else {
                console.log(mess)
                res.render('index.ejs', {'mess' : mess})

            }
        })
    },
    create_message : (req, res)=>{
        console.log('creating message')
        Models.Message.create(req.body, function(err, data){
            if (err) {
                for (var key in err.errors){
                    req.flash('mess', err.errors[key].message)
                }
                res.redirect('/')
            } else {
                console.log('message created')
                req.flash('mess', 'Message Posted')
                res.redirect('/')
            }
        })
    },
    create_comment : (req, res)=>{
        Models.Comment.create(req.body, function(err, data) {
            if (err) {
                for (var key in err.errors){
                    req.flash('mess', err.errors[key].message)
                }
                res.redirect('/')
            } else{
                Models.Message.findOneAndUpdate({_id : req.params.id}, {$push: {comments: data}}, function(err, data){
                    if (err) {
                        req.flash('mess', "could not associate comment")
                    } else {
                        req.flash('mess', "comment associated to message")
                        res.redirect('/')
                    }
                })
            }
        })
    }
}