function clock() {
var now = new Date()
var hours = now.getHours()
var minutes = now.getMinutes()
var seconds = now.getSeconds();


var k=document.getElementById("v");
var kk=document.getElementById("k2");
if(seconds%2==0){
  k.innerHTML=":"
  kk.innerHTML=":"
}
else{
  k.innerHTML=" "
  kk.innerHTML=" "
}

document.getElementById('d1').innerHTML = a(hours); 
document.getElementById("d2").innerHTML = a(minutes);
document.getElementById('d3').innerHTML = a(seconds); 
  function a(standin) {
    if (standin < 10) {
      standin = '0' + standin
    }
    return standin;
  }
}
setInterval(clock, 1000);






