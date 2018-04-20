/*document.write("<table border='1' cellpadding='20'>");
for (var i = 1; i <= 9; i++) {
	if(i==1 || i==9){
		document.write("<tr style='background-color:red;'>")
	}
	else{
		document.write("<tr>")
	}

	
	  for (var j=1; j<=9; j++){
	  	if(j==9 || j==1){
	     document.write("<td style='background-color:red;'></td>")
      }
      else{
      	document.write("<td></td>");
      }
  }
document.write("</tr>")
}

document.write("</table>");


document.write("<table border='1'cellpadding='20'>")
for (var i = 1; i <=8; i++) {
	document.write("<tr>")
	for (var n = 1; n <=8; n++) {
		if (i%2==n%2) {
			document.write("<td style='background:white'>")
		}
		else  {
			document.write("<td style='background:black'>")
		}
	document.write("</td>")
	}
	document.write("</tr>")
}
document.write("</table>")
*/

// document.write("<table border='1' cellpadding='20'>");
// for (var i = 1; i <= 9; i++) {

// 		document.write("<tr>")
	


// 	  for (var j=1; j<=9; j++){
// 	  	if((i+j)%2!=0){
// 	     document.write("<td style='background-color:red;'></td>")
//       }
//       else{
//       	document.write("<td style='background-color:white;'></td>")
//       }
//   }
// document.write("</tr>")
//   }


// document.write("</table>");



document.write("<table border='1' cellpadding='20'>");
for (var i = 1; i <= 9; i++) {

		document.write("<tr>")
	


	  for (var j=1; j<=9; j++){
	  	if(i==1 || i==9 || j==1 || j==9){
	     document.write("<td style='background-color:red;'></td>")
      }
      else{
      	document.write("<td style='background-color:white;'></td>")
      }
  }
document.write("</tr>")
  }


document.write("</table>");