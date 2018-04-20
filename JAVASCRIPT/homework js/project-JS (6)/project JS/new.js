//----uxankyun div, vorn achum e laynqov 20px cikli tak----------------

var b = 50;
for(a=100; a<=200; a+=20){
    document.write("<div style='width:" + a + "px; height:" + b + "px; border:2px solid'></div><br>");
}

//------shaxmat---------------------------------------------------------

document.write("<table border='2' cellpadding='20'>");
for(i=1; i<=8; i++) {            
        document.write("<tr>");       
    for (j=1; j<=8; j++) {
        ((i + j) % 2 == 0)? 
            document.write("<td style='background:black'>"):           
       
           document.write("<td style='background:white'></td>"); 
        }       
  
    document.write("</tr>")
} 
document.write("</table><br>")

//--------bazmapatkman axyusak 1-9----------------------------------------

 document.write("<table border='2' cellpadding='12' style='border-collapse:collapse'>")
 for( var i=1; i<10; i++) {
     
          document.write("<tr>")
 	
 	for(var j=1; j<10; j++) {
        rezult = i*j;
        if((j == 1 || i == 1) || (j == 9 || i == 9)) {
           document.write("<td style='background:red'>");
           }
           else {
           document.write("<td style='background:white'>");
           }
        
 		document.write(rezult);
 		document.write("</td>");
 	}
 	document.write("</tr>");
 }
document.write("</table><br>");

//------------------------------------------------------------------------

document.write("<p>Texadrvel en \"arr1\" ev \"arr2\" -i zuyg tver@</p>");
var arr1 = [2,12,45,100,64,85,55,81,9,6]
var arr2 = [64,12,45,100,2,85,55,81,9,6,1,11,20]
var arr3 = arr1.concat(arr2); //texadrel arr 1, arr2 -i zuyg tver@
    
for( var i = 0; i<arr3.length; i++) {
  if(arr3[i] % 2 == 0){
    document.writeln(arr3[i])     
  }
}
document.write("<hr>"); 

/*
var arr4 = [2,12,45,100,64,85,55,81,9,6]
var arr5 = [64,12,45,100,2,85,55,81,9,6,1,11,20]
var arr6 = []

for(var n = 0; n<=arr4.length; n++) {
    if(arr4[n] % 2 == 0) {    
        arr4 = arr4[n]        
        document.writeln(arr4)        
    }
    for(var m = 0; m <= arr5.length; m++) {
        if(arr5[m] % 2 == 0) {
          arr5 = arr5[m]
            //document.writeln(b)
            
        }
   
    }
    arr6 = arr4.concat(arr5)
document.writeln(arr6)
}
*/

//--------------------------------------------------------------------------------------------------------

document.write("<p>Patrastum enq 3 div @st zangvacneric stacvac tvyalneri</p>");

var arr = [50,30,20] //width
var arr2 = [] //height = wigth*2
var arr3 = ["green", "blue", "red"] // bg-color
for(var i = 0; i < arr.length; i++) {    
        var j = arr[i]
        n = j*j 
        m = arr3[i]
    document.write("<div style='height:" + arr[i] +"px; width:"+ n +"px; background-color:"+ m +"'></div><br>");
}
document.write("<hr>"); 
//----------------------------------------------------------------------------------------------------------  


document.write("<p>Poxarinu menq zangvaci miji storaketner@ \"+\" -ov</p>");

var arr = ["mango","banan","ananas","limon"];
document.write(arr.join("+"))