
var but = document.createElement('button')
var text = document.createTextNode('click me')
but.appendChild(text)
document.body.appendChild(but)
but.setAttribute('onclick','f()')
but.style.background= 'lime';
but.style.padding= '5px 15px';
function f(){
    var l = Math.round(Math.random()*500)
    var t = Math.round(Math.random()*500)
    var wh = Math.round((Math.random()*100)+10)
    var r = Math.round(Math.random()*255)
    var g = Math.round(Math.random()*255)
    var b = Math.round(Math.random()*255)
    var color = "rgb"+"("+(r+"," +g+ "," +b)+")"
	var block = document.getElementById('block')
    var smallDiv = document.createElement('div')
    smallDiv.setAttribute('id','smallDiv')
    smallDiv.style.background= color
    smallDiv.style.width= wh + "px"
    smallDiv.style.height= wh + "px"
    smallDiv.style.left= l + "px"
    smallDiv.style.top= t + "px"
    smallDiv.setAttribute('onclick','e(this)')
    block.appendChild(smallDiv)
}

function e(hid){
    hid.style.display = 'none'
    alert(hid.style.background)
}