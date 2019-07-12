const express = require("express")
const bp = require("body-parser")
const path = require("path")
const session = require("express-session")
const flash = require("express-flash")
var app = express()

app.use(bp.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './static')))
app.use(session({
    secret: 'messages',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash())

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
  
require('./routes')(app)

app.listen(8000, (err)=>{
    if (err){
        console.log(err)
    } else {
        console.log("listening on port 8000...")
    }
})