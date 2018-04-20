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
        if(j == 1 || i == 1 || j==9 || i==9) {
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
document.write("</table>");

//------------------------------------------------------------------------
