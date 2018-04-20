function display(callback){
   callback()
}

console.log("App is starting")


setTimeout(function(){
    console.log("The async work timeout 100")
},100)

setTimeout(function(){
    console.log("The async work timeout 500")
},500);

display(function(){console.log("The app work is finished")})