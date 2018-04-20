var http = require("http");
var os = require("os");
var userName = os.userInfo().username;
// console.log(userName)
var greeting = require("./greeting");
var User = require("./user");
var welcome = require("./welcome")



// console.log(`Date request :${greeting.date}`);
// console.log(`Get message :  ${greeting.getMessage(userName)}`)
var greeting1 = require("./greeting1");
// console.log(`hello ${greeting1.name}`)
var greeting2=require("./greeting1");
greeting2.name = "Bob";
// console.log(`hello ${greeting2.name}`);
// console.log(`hello ${greeting1.name}`)

// var seroj = new User("Seroj",22);
// seroj.fullname()
welcome.getEveningMessage();
welcome.getMorningMessage();

http.createServer(function(req,res){
    res.end("Hello nodeJs")
}).listen(3000,function(){
    // console.log("Server listening in 3000 port")
})