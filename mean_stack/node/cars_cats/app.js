var http=require('http');
const url=require('url')

var fs=require('fs');

var server=http.createServer(function(request, response){

    console.log('client request URL: ', request.url);

    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents)
            response.end()
        })
    } else if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents)
            response.end()
        })
    } else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents)
            response.end() 
        })    
    } else if(request.url === '/cars/new') {
        fs.readFile('./views/cars_new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents)
            response.end() 
        })
    } else if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'}) //must specify css
            response.write(contents)
            response.end() 
        })
    } else if (request.url === '/images/cat1') {
        fs.readFile(`./images/cat1.gif`, function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/gif'}) //correct content type
            response.write(contents)
            response.end()
        })
    } else if (request.url === '/images/cat2') {
        fs.readFile(`./images/cat2.gif`, function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/gif'}) //correct content type
            response.write(contents)
            response.end()
        })
    } else if (request.url === '/images/cat3') {
        fs.readFile(`./images/cat3.gif`, function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/gif'}) //correct content type
            response.write(contents)
            response.end()
        })
    } else if (request.url === '/images/cat4') {
        fs.readFile(`./images/cat4.gif`, function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/gif'}) //correct content type
            response.write(contents)
            response.end()
        })
    } else if (request.url === '/images/old_car1') {
        fs.readFile('./images/old_car1.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'}) //correct content type
            response.write(contents)
            response.end()
        })
    } else if (request.url === '/images/old_car2') {
        fs.readFile('./images/old_car2.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'}) //correct content type
            response.write(contents)
            response.end()
        })
    } else if (request.url === '/images/old_car3') {
        fs.readFile('./images/old_car3.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpg'}) //correct content type
            response.write(contents)
            response.end()
        })
    } else {
        response.writeHead(404)
        response.end('Page not found...')
    }
});

server.listen(6789);

console.log("Running on localhost at port 6789");