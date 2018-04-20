var day = Number(prompt("Մուտքագրեք օրերի քանակ և իմացեք թե քանի օր է մնացել մինչև ամսվա վերջ"));
var d = new Date();
var date = new Date(d.getFullYear(), d.getMonth() + 1, 0);
var monthDate = date.getDate()
function myFunction() {    
    var message = document.getElementById("message");
    var newDay = monthDate - day
    try { 
        if(day == "") {throw "դատարկ է"}
        else if(isNaN(day)) {throw "թիվ չէ"}             
        else if(day < 0)    {throw "բացասական թիվ է"}
        else if(day > 30)   {throw "մեծ է " +  monthDate + " -ից"} 
        else {message.innerHTML = "Մինչև ամսվա վերջ մնացել է " + Math.round(newDay) + " օր "};
    }
    catch(err) {
        message.innerHTML = "Մուտքագրվածը " + err; 
    }    
}
myFunction()
document.write("<hr>"); 
