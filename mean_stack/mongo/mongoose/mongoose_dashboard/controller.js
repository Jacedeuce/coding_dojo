const Beaver = require("./models")

module.exports = {
    index : (req, res)=>{
        beavers = Beaver.find({}, function(err, data){

            res.render('index.ejs', {beavers : data})
        })
        
    },

    show_beaver : (req, res)=>{
        Beaver.findById(req.params.id, function (err, data){
            res.render('show.ejs', { "beaver" : data})

        })
    },

    new_beaver : (req, res)=>{

        res.render('new.ejs')
    },

    create_beaver : (req, res)=>{
        console.log("creating beaver")
        Beaver.create(req.body, function(err, data){
            if (err) {
                for (var key in err.errors){
                    req.flash('beavers', err.errors[key].message)
                }
                res.redirect('/beavers/new')
            } else {
                req.flash('beavers', "Beaver created!")
                res.redirect('/')
            }
        })
    },

    edit_beaver : (req, res)=>{
        Beaver.findById(req.params.id, function (err, data){
            console.log(data._id)
            res.render('edit.ejs', { "beaver" : data})
        })
    },

    update_beaver : (req, res)=>{
        console.log(req.body)
        Beaver.update({name : req.body.name}, req.body, function(err, beaver){
            if (err) {
                for (var key in err.errors){
                    req.flash('beavers', err.errors[key].message)
                }
                res.redirect(`/beavers/edit/${req.body._id}`)
            } else {
                console.log(`/beavers/${req.body._id}`)
                res.redirect(`/beavers/${req.body._id}`)
            }
        })
    },

    destroy_beaver : (req, res)=>{
        Beaver.findByIdAndRemove(req.params.id, (err, tasks) => {
            if (err) {
                console.log("Problems deleting")
                req.flash('beavers', "Beaver not deleted!")
            } else {
                console.log("deleted")
                req.flash('beavers', "Beaver deleted!")
                res.redirect('/')
            }
        })
    },
}