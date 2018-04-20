/*var inp=document.getElementById("inp")
var inp1=document.getElementById("inp1")
var inp2=document.getElementById("inp2")
var inp3=document.getElementById("inp3")
function a(){
	var a=Number(inp.value)+Number(inp1.value)+Number(inp2.value)+Number(inp3.value)
	alert(a)
}

function b(){
	var b=Number(inp.value)-Number(inp1.value)-Number(inp2.value)-Number(inp3.value)
	alert(b)
}

function c(){
	var c=Number(inp.value)*Number(inp1.value)*Number(inp2.value)*Number(inp3.value)
	alert(c)
}

function d(){
	var d=Number(inp.value)/Number(inp1.value)/Number(inp2.value)/Number(inp3.value)
	if(inp1.value==0 || inp2.value==0 || inp3.value==0){
		alert("False")
	}
	else{
		alert(d)
	}
	

}

*/
var inp=document.getElementsByTagName("input");

	var p=0;
function a(){
	for(var i=0;i<inp.length;i++){
		p=p+Number(inp[i].value)
	}
	alert(p)
}


function b(){
	var hanum=inp[0].value;
	for(var i=1;i<inp.length;i++){
		hanum=hanum-Number(inp[i].value)
	}
	alert(hanum)
}

function c() {
	var baz=inp[0].value;
	for(var i=1;i<inp.length;i++){
		baz=baz*Number(inp[i].value)
	}
	alert(baz)
}

function d() {
	var baj=inp[0].value;
	for(var i=1;i<inp.length;i++){
		
		baj=baj/Number(inp[i].value)
	}
	
		alert(baj)

}

var min=Number(inp[0].value)
for(var i=1;i<inp.length;i++){
	if(min>Number(inp[i].value)){
		min=inp[i].value
	}
}
document.write(min)