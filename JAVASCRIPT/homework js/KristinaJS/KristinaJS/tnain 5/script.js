/*var a=1
function f(){

var div=document.getElementById("d")
div.style.left=a+"px";
a+=10

}

function g(){
	var div=document.getElementById("d")
    div.style.left=a+"px";
a-=10
}*/

var a=100
function f(){
	var div=document.getElementById("d")
	div.style.width=a+"px";
	div.style.height=a+"px";
	if(a<600){
	a+=100
    }
}

function g() {
	var div=document.getElementById("d")
	div.style.width=a+"px";
	div.style.height=a+"px";
	a-=100
    
}