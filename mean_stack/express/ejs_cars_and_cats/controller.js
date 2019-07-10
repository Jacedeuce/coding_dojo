module.exports = {
    index : (req, res)=>{
        context = {pages : ['cars', 'cats']}
        res.render('index', context)
    },
    cars : (req, res)=>{
        res.render('cars')
    },
    cats : (req, res)=>{
        res.render('cats')
    },
    newcar : (req, res)=>{
        res.render('newcar')
    }
}