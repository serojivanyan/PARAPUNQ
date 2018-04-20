/*var r=document.getElementById("red")
var g=document.getElementById("green")
var b=document.getElementById("blue")
var gr=document.getElementById("grey")
var y=document.getElementById("yellow")
var select=document.getElementById("sel")
function z(){

    if(document.body.innerHTML=select.value && select.value==r.value){
		document.body.style.backgroundColor = "red";
    }

	else if(document.body.innerHTML=select.value && select.value==g.value){
	document.body.style.backgroundColor = "green";
    }

    else if(document.body.innerHTML=select.value && select.value==b.value){
	document.body.style.backgroundColor = "blue";
    }

    else if(document.body.innerHTML=select.value && select.value==gr.value){
	document.body.style.backgroundColor = "grey";
    }
    
    else if(document.body.innerHTML=select.value && select.value==y.value){
	document.body.style.backgroundColor = "yellow";
    }

}

*/

function z() {
    document.body.style.backgroundColor=document.getElementById("sel").value
}