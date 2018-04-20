var arr=[25,-255,65,8,9,40]
for(var i=0;i<=5;i++){
	if(arr[i]%2==1 || arr[i]%2==-1){
		
	document.writeln(arr[i])

}


}

document.write("<br>")

var arr=[25,-255,65,8,9,40]
for(var i=0;i<=5;i++){
	if(arr[i]%3==0 && arr[i]%2!=0){
		
	document.writeln(arr[i])

}
}

document.write("<br>")

var a=1
var arr=[25,-255,65,8,9,40]
for(var i=0;i<=5;i++){
	if(arr[i]%2==0){
		
		a*=arr[i]
	

}
}
document.write(a)
document.write("<br>")

///////////////////////

var a=[25,10,22];
var b=[ ];
var c=["red","green","blue"]

for (var i=0;i<=2;i++) {
	b[i]=a[i]*a[i]
document.write("<div style='height:"+a[i]+"px; width:"+b[i]+"px; border:2px solid; background-color:"+c[i]+";'></div>")
}