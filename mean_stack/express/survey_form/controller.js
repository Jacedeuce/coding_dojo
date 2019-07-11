module.exports = {
    index : (req, res)=>{
        res.render('index')
    },

    result : (req, res)=>{
        if (req.method == 'POST'){
            form = {
                name: req.body.name,
                location : req.body.location,
                language : req.body.language,
                comment : req.body.comment,
            }
        }
        
        res.render('result.ejs', form)
    }
}