function startTime() {
var dateNow = new Date()
var h = dateNow.getHours()
var m = dateNow.getMinutes()
var s = dateNow.getSeconds()

m = checkTime(m);
s = checkTime(s);
var t = setTimeout(function(){startTime()},500);
    
document.getElementById('txt').innerHTML = h+ " <span >:</span> " +m +" <span >:</span> "+s;


var myTag = document.getElementsByTagName('span')

    
       

         /*  for (var i = 0; i < myTag.length; i++) {
           	if (myTag[i]%2==0) {
           		myTag[i].innerHTML=" "
           	}
           	else{
           		myTag[i].innerHTML=" :"
           	}
           }
        */
  
    
}
function checkTime(i) {
 if (i<10) {i = "0" + i}; // avelacnum enq 0 tveri arjevic, voronq poqr en 10-ic
 return i;
}


document.write('<div id="txt"></div>')
 