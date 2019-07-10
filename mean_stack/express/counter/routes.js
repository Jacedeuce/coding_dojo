const controller = require("./controller")
module.exports = function(app){
    app.get('/', controller.index)
    app.post('/2', controller.two)
}