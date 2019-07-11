const controller = require("./controller")
module.exports = function(app){
    app.get('/', controller.index)
    app.post('/quotes', controller.create_quote)
    app.get('/quotes', controller.quotes)
}