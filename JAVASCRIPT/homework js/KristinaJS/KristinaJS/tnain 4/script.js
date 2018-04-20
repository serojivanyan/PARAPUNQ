var tariq=prompt("Ձեր տարիքը")
for(var i=tariq-1;i<tariq;i++){
	if(tariq<18){
		alert("Դուք չեք կարող մուտք գործել տվյալ էջ")
	}
	else{
		alert("welcome")
	}
}


var qanak=prompt("քանակ")
var width=prompt("երկարություն")
var height=prompt("բարձրություն")
var r=prompt("r")
var g=prompt("g")
var b=prompt("b")

for(i=0;i<qanak;i++){
	document.write("<div style='width:"+width+"px;background-color:rgb("+r+","+g+","+b+");height:"+height+"px; border:2px solid; margin:5px;'></div>")
}