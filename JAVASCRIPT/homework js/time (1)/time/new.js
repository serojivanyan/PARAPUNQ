function startTime() {
var dateNow = new Date()
var h = dateNow.getHours()
var m = dateNow.getMinutes()
var s = dateNow.getSeconds()

m = checkTime(m);
s = checkTime(s);
var t = setTimeout(function(){
	startTime()
},500);
    
document.getElementById('txt').innerHTML = h+ " <strong>:</strong> " +m +" <strong>:</strong> "+s;


var myTag = document.getElementsByTagName('strong')

    
        if(s % 2 == 0){
           myTag[0].style.visibility="hidden";
           myTag[1].style.visibility="hidden";
           }
        
  
    
}
function checkTime(i) {
 if (i<10) {i = "0" + i}; // avelacnum enq 0 tveri arjevic, voronq poqr en 10-ic
 return i;
}


document.write('<div id="txt"></div>')
 