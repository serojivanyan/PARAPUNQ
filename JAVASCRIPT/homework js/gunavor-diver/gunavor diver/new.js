var w = prompt("laynutyun?")
var h = prompt("barcrutyun?")
var quanity = prompt("qanak")

for(var i=0; i<quanity; i++){
    
    var r = Math.round(Math.random()*255)
    var g = Math.round(Math.random()*255)
    var b = Math.round(Math.random()*255)
    var color = "rgb"+"("+(r+"," +g+ "," +b)+")"
    
    document.write("<div style='width:"+ w +"px;height:"+ h +"px;background-color:"+color+";'></div>")

}
alert("tesar? es el areci:))")

    