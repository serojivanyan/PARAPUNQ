
var a = 300
function e() {    
    var d = document.getElementById("demo")
  if( a > 100){
    a -= 20
    d.style.width = a + "px"
    d.style.height = a + "px"
  }
}



var a = 100;
function u() {
    var d = document.getElementById("demo")
  if( a <= 280){
    a += 20
    d.style.width = a + "px"
    d.style.height = a + "px"    
  } 
}

var a = 100;
var flag = true
function f() {
    var d = document.getElementById("demo")
  if( a >= 100 && a <= 280 && flag){
    u()      
  } else if(a <= 300){
      e()
      flag = false
  }
    
}



