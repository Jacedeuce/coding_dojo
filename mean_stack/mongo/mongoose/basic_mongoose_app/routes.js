const controller = require("./controller")
module.exports = function(app){
    app.get('/', controller.index) 
    app.post('/users', controller.users)
}