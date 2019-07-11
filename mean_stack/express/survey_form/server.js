const express = require('express')
const bodyParser = require('body-parser');

var app = express()

app.set('views', __dirname + '/views/')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({extended: true}))

require('./routes')(app)

app.listen(8000, (err)=>{
    if (err) {
        console.log(err)
    } else {
        console.log("listening on port 8000")
    }
})