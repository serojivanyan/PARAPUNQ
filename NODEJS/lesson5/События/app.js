// var Emitter = require("events");
// var emitter = new Emitter();

// var eventName="greet";

// emitter.on(eventName,function(){
//     console.log("Hello all")
// })

// emitter.on(eventName,function(){
//     console.log("goodbye all")
// })

// emitter.emit(eventName)


var Emitter= require("events");
var emitter=new Emitter();
var eventName = "greet";


emitter.on(eventName,function(data){
    console.log(data)
});

emitter.emit(eventName,"Privet Vsem")