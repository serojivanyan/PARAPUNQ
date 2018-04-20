//require express
var express = require("express");
// creating app
var app = express();


//creating middleware

app.get("/",function(request,response){
    response.end("Hello from express")
})

// create listen port to 3000

app.listen(3000);