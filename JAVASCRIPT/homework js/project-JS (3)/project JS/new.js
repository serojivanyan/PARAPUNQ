//----uxankyun div, vorn achum e laynqov 20px cikli tak----------------

var b = 50;
for(a=100; a<=200; a+=20){
    document.write("<div style='width:" + a + "px; height:" + b + "px; border:2px solid'></div><br>");
}

//------shaxmat---------------------------------------------------------

document.write("<table border='2' cellpadding='20'>");
for(i=1; i<=8; i++) {            
        document.write("<tr>");       
    for(j=1; j<=8; j++) {
        if((i + j) % 2 == 0) {
            document.write("<td style='background:black'>")            
       }
        else {
           document.write("<td style='background:white'>") 
           /* document.writeln(i);
            document.write(j);*/
 		    document.write("</td>");
        }
       
    } 
    document.write("</tr>")
} 
document.write("</table><br>")

//--------bazmapatkman axyusak 1-9----------------------------------------

 document.write("<table border='2' cellpadding='12'>")
 for( var i=1; i<10; i++) {
 	document.write("<tr>")
 	for(var j=1; j<10; j++) {
        rezult = i*j;
        document.write("<td>");
 		document.write(rezult);
 		document.write("</td>");
 	}
 	document.write("</tr>");
 }
document.write("</table>");


var arr=[25,100,43,65,72,4,3,10];
var arr1=[43,5,6,90,81,34,52,36]
var arr3=[];
for (var i = 0; i < arr.length; i++) {
    /*if (arr[i]%2==0) {
        arr3+=arr[i]
    }*/
    for (var j = 0; j < arr1.length; j++) {
        if (arr[i]%2==0 && arr1[j]%2==0) {
            arr3+=arr[i] 
            arr3+=arr1[j]
        }
    }
}
document.writeln(arr3 +'<br>')