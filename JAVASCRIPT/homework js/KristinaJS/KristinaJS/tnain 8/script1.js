/*var m=document.getElementById('mec')
var p=document.getElementById("poqr")
var a=10
var k=true
function f() {
	var r=Math.round(Math.random()*255)
	var g=Math.round(Math.random()*255)
	var b=Math.round(Math.random()*255)
    p.style.backgroundColor="rgb("+r+","+g+","+b+")"
    if(a<=500 && a>0 && k){
      p.style.left=a+"px";
      a+=30
       if(a==10){
       	k=true
       }
    }

    else{
    	k=false
    	p.style.left=a+"px"
    	a-=30
    	if(a==10){
    		k=true
    		

    	}
    }

}


function g() {
	var r=Math.round(Math.random()*255)
	var g=Math.round(Math.random()*255)
	var b=Math.round(Math.random()*255)
    p.style.backgroundColor="rgb("+r+","+g+","+b+")"
    if(a<=330 && a>0 && k){
      p.style.marginTop=a+"px";
      a+=30
       if(a==10){
       	k=true
       }
    }

    else{
    	k=false
    	p.style.marginTop=a+"px"
    	a-=30
    	if(a==10){
    		k=true
    		

    	}
    }

}*/


var m=document.getElementById('mec')
var p=document.getElementById("poqr")
var a=8;
var b=8;

function ff() {
  var r=Math.round(Math.random()*255)
  var g=Math.round(Math.random()*255)
  var b=Math.round(Math.random()*255)
    p.style.backgroundColor="rgb("+r+","+g+","+b+")"
  if(a<=528){
  a+=10;
  p.style.left=a+"px"

}
}



function gg() {
  var r=Math.round(Math.random()*255)
  var g=Math.round(Math.random()*255)
  var b=Math.round(Math.random()*255)
    p.style.backgroundColor="rgb("+r+","+g+","+b+")"
    if(a>=0){
  a-=10;
  p.style.left=a+"px";
  
}
}




function uu() {
  var r=Math.round(Math.random()*255)
  var g=Math.round(Math.random()*255)
  var b=Math.round(Math.random()*255)
    p.style.backgroundColor="rgb("+r+","+g+","+b+")"
  if(a>0){
  a-=10;
  p.style.top=a+"px";
}
}



function dd() {
  var r=Math.round(Math.random()*255)
  var g=Math.round(Math.random()*255)
  var b=Math.round(Math.random()*255)
    p.style.backgroundColor="rgb("+r+","+g+","+b+")"
  if(a<=350){
  a+=10;
  p.style.top=a+"px";
}
}





