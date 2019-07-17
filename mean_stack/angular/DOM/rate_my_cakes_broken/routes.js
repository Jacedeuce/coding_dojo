const controller = require("./controller")
module.exports = function(app){
    app.get('/cakes', controller.cakes)
    app.get('/cakes/:id', controller.show_cake) 
    app.post('/cakes', controller.create)
    app.put('/cakes/:id', controller.create_rating)
}