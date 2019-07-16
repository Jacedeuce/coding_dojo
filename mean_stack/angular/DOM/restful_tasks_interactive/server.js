const express = require('express')
const bp = require("body-parser")

var app = express()

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(express.static( __dirname + '/tasks/dist/tasks' ));

require('./routes')(app)

app.listen(8000, (err)=>{
    if (err){
        console.log(err)
    } else {
        console.log("listening on port 8000...")
    }
})