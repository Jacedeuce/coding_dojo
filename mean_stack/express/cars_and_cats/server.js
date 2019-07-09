const express = require('express');

var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function(req, res) {

});


app.listen(8000, function(){
    console.log("Listening on port 8000...")
})