const Quotes = require('./models')
module.exports = {
    index: (req, res) => {
        res.render('index')
    },

    create_quote : (req, res) => {
        Quotes.create(req.body, function(err,data){
            if (err) {
                for(var key in err.errors){
                    req.flash('quotes', err.errors[key].message);
                }
                res.redirect('/')
            } else { 
                res.redirect('/quotes')
            }
        })
        
    },

    quotes : (req, res) => {
        Quotes.find({}, function(err, quotes){
            if(err){
                res.render('quotes', {q : quotes})
            } else {
                for (q of quotes) {
                    q.formatted_date = new Date(q.createdAt).toDateString()
                }
                
                res.render('quotes', {q : quotes})
            }
        })
    }
}