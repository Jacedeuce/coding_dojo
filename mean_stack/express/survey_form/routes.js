const controller = require('./controller')

module.exports = function(app){
    app.get('/', controller.index)
    app.post('/result', controller.result)
}