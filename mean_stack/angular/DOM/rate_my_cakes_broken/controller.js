const Models = require("./models")

module.exports = {
    cakes : (req, res) => {
        Models.Cake.find({}, function(err, all_cakes) {
            if (err) {
                console.log(err)
            } else {
                res.json({ 'cakes' : all_cakes })
            }
        })
    },
    show_cake : (req, res) => {
        Models.Cake.findOne({_id : req.params.id}, function(err, cake){
            if (err) {
                console.log(err)
            } else {
                res.json({ 'cake' : cake })
            }
        })
    },
    create : (req, res) => {
        console.log(req.body)
        Models.Cake.create({ name : req.body.name, image_url : req.body.image_url }, function(err, new_cake) {
            if(err) {
                console.log(err)
            } else {
            Models.Baker.findOneAndUpdate({ full_name : req.body.full_name}, {$push: {cakes : new_cake}}, { upsert : true, new: true }, function(err, new_baker){
                if (err) {
                    console.log('could not link cake to baker')
                } else {
                    console.log(`${new_cake.name} and ${new_baker.full_name} successfully created`)
                    res.json({ 'cake' : new_cake, 'baker' : new_baker})
                }
            })
            }
        })
    },
    create_rating : (req, res) => {
        console.log(req.body)
        Models.Rating.create({ stars : req.body.stars, comment : req.body.comment }, function(err, new_rating) {
            if(err) {
                console.error.log(err)
            } else {
                Models.Cake.findByIdAndUpdate({_id : req.params.id}, {$push: {ratings: new_rating}}, function(err, data){
                    if (err) { 
                        console.log('Could not link rating to cake')
                    } else {
                        console.log('cake and rating linked')
                        res.json({message : "rating created", rating : new_rating})
                    }
                })
            }
        })
    }
}