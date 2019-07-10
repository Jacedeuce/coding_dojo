const express = require('express')
const session = require('express-session')
const bp = require('body-parser')

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + "/static"));
app.use(bp.urlencoded({extended:true}))
app.use(session({
    secret: 'counter',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

require('./routes')(app)


app.listen(8000, (err)=>{
    if(err){
        console.log(err)
    } else {
        console.log("listening on port 8000")
    }
})