var div1=document.getElementById('d1')
var div2=document.getElementById("d2")
var but=document.getElementById("but")
var inp1=document.getElementById("inp1")
var inp2=document.getElementById("inp2")
var ok=document.getElementById("butok")
var plus=document.getElementById("plus")
var minus=document.getElementById("minus")

var set
function f(){
	div1.style.display="block";
	div2.style.display="block"
	minus.style.display="block"
	plus.style.display="block"
	


	if(but.innerHTML=="open"){
		but.innerHTML="close"
	}
	else{
		div1.style.display="none";
	    div2.style.display="none"
	    plus.style.display="none"
	    minus.style.display="none"
	 if(but.innerHTML=="close"){
		but.innerHTML="open"
	}
	}

}


function p(){
	div1.style.width='400px';
	div1.style.height="300px";
	div2.style.width='400px';
	div2.style.height="300px";
	div2.style.fontSize="32px";
	inp1.style.fontSize="24px"
	inp1.style.height="50px"
	inp2.style.height="50px"
	inp2.style.fontSize="24px"
	inp1.style.left="40px"
	inp2.style.left="40px"
	ok.style.fontSize="36px"
	ok.style.left="90px"
	plus.style.fontSize="32px"
    minus.style.fontSize="32px"
    but.style.fontSize="32px"
}

function m(){
	div1.style.display="none";
	div2.style.display="none"
	if(but.innerHTML=="close"){
 	but.innerHTML="open"
	}
}


var ol=document.createElement("ol")
d2.appendChild(ol)

function o(){
var li=document.createElement("li")
ol.appendChild(li)
   var fam =inp1.value+" "+inp2.value +"<button onclick='g(this)'>x</button>"+"<br>"
   li.innerHTML+=fam

if(inp1.value!=" " || inp2.value!=" "){
	inp1.value=" "
	inp2.value=" "
}
}

function g(a){
	ol.removeChild(a.parentNode)
}


