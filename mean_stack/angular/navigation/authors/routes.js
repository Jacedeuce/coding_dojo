const controller = require("./controller")

module.exports =  function(app){
    app.get('/api/authors', controller.authors)
    app.get('/api/authors/:id', controller.author)
    app.post('/api/authors', controller.create)
    app.put('/api/authors/:id', controller.update)
    app.delete('/api/authors/:id', controller.delete)
    app.all("*", controller.all)   // Typing into the nav bar and hitting enter or making the browser refresh will trigger the Express routes first and Angular routes second.

}