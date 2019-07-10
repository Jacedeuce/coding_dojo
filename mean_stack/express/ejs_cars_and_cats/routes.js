const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.index)
    app.get('/cars', controller.cars)
    app.get('/cars/new', controller.newcar)
    app.get('/cats', controller.cats)
    app.get('/cats/:catID', controller.cat_show)
}