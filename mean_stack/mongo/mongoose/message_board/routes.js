const controller = require("./controller");
module.exports = function(app){
  app.get('/', controller.index)
  app.post('/', controller.create_message)
  app.post('/comment/:id', controller.create_comment)
}