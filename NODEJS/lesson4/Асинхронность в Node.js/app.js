function display(data,callback){
    var num = Math.round(Math.random()*20);
    var err;
    if(num>18){
         err = new Error("The number is big ten")
    }else{
        err=null;
    }
    setTimeout(function(){
        callback(err,data)
    },3000)
}
console.log("The up running...")
display("Uploading data...",function(err,data){
    if(err){
        throw err
    }
    console.log(data)
})
console.log("The up is run is finished.")