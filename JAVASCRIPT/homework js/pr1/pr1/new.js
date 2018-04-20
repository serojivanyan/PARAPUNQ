
//------------------------------------------------------------------------

document.write("<p>Texadrvel en \"arr1\" ev \"arr2\" -i zuyg tver@</p>");
/*var arr1 = [2,12,45,100,64,85,55,81,9,6]
var arr2 = [64,12,45,100,2,85,55,81,9,6,1,11,20]
var arr3 = arr1.concat(arr2); //texadrel arr 1, arr2 -i zuyg tver@
    
for( var i = 0; i<arr3.length; i++) {
  if(arr3[i] % 2 == 0){
    document.writeln(arr3[i])     
  }
}
document.write("<hr>");*/ 

var arr4 = [2,12,45,100,64,85,55,81,9,6]
var arr5 = [64,12,45,100,2,85,55,81,9,6,1,11,20]
var arr6 =[]
for (var i = 0; i < arr4.length; i++) {
  if (arr4[i]%2==0) {
    var a=arr6.concat(arr4[i])
    document.writeln(a)
  }
}
  for (var j = 0; j < arr5.length; j++) {
    if (arr5[j]%2==0) {
      var b=arr6.concat(arr5[j])
      document.writeln(b)
    }
  }
      

         
   



//--------------------------------------------------------------------------------------------------------

/*document.write("<p>Patrastum enq 3 div @st zangvacneric stacvac tvyalneri</p>");

var arr = [50,30,20] //width
var arr2 = [] //height = wigth*2
var arr3 = ["green", "blue", "red"] // bg-color
for(var i = 0; i < arr.length; i++) {    
        var j = arr[i]
        n = j*j 
        m = arr3[i]
    document.write("<div style='height:" + arr[i] +"px; width:"+ n +"px; background-color:"+ m +"'></div><br>");
}
document.write("<hr>"); */
//----------------------------------------------------------------------------------------------------------  


