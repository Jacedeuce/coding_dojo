cat1 = {id : 1, name: 'Earbiter', age : 2, fav_food : ["ears", "Kibbles & Bits"]}
cat2 = {id : 2, name: 'Soup', age : 7, fav_food : ["Chicken Noodle", "Pea Soup"]}
cat3 = {id : 3, name: 'Walkee', age : 4, fav_food : ["bananas", "eucalyptus"]}
cat4 = {id : 4, name: 'Little Ceasar', age : 5, fav_food : ["Pizza", "Pepperoni"]}

cat_arr = [cat1, cat2, cat3, cat4]

module.exports = {
    index : (req, res)=>{
        var context = {pages : ['cars', 'cats']}
        res.render('index', context)
    },
    cars : (req, res)=>{
        res.render('cars')
    },
    newcar : (req, res)=>{
        res.render('newcar')
    },
    cats : (req, res)=>{
        res.render('cats', {cats : cat_arr})
    },
    cat_show : (req, res)=>{
        res.render('cat_show', {cat : cat_arr[req.params.catID-1]})
    }
}