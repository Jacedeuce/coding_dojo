var http= require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);

    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/ninjas") {
        fs.readFile('ninjas.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.write(contents)
            response.end()
        })
    } else if (request.url === "/dojos/new") {
        fs.readFile('dojos.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type' : 'text/html'})
            response.write(contents)
            response.end()
        })
    } else if (request.url ==="/static/style.css") {
        fs.readFile('static/style.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type' : 'text/css'})
            response.write(contents)
            response.end()
        })
    } else {
        response.writeHead(404);
        response.end('Page not found...');
    }
});

server.listen(6789)

console.log("Running in localhost at port 6789")