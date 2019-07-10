var express = require("express");

var app = express();

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

require('./routes')(app)

app.listen(8000, (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("listening on port 8000")
    }
})