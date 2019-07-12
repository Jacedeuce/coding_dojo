const controller = require("./controller")
module.exports = function(app){
    app.get('/', controller.index)
    app.get('/beavers/new', controller.new_beaver)
    app.get('/beavers/:id', controller.show_beaver)
    app.post('/beavers', controller.create_beaver)
    app.get('/beavers/edit/:id', controller.edit_beaver)
    app.post('/beavers/:id', controller.update_beaver)
    app.get('/beavers/destroy/:id', controller.destroy_beaver)
}