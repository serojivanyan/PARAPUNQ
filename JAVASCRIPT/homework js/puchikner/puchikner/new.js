
var but = document.createElement('button')
var text = document.createTextNode('Ստեղծել')
but.appendChild(text)
document.body.appendChild(but)
but.setAttribute('onclick','generate()')
but.style.background= 'lime';
but.style.padding= '5px 15px';
but.style.margin= '15px 15px 0 0'

var but = document.createElement('button')
var text = document.createTextNode('Չեղարկել')
but.appendChild(text)
document.body.appendChild(but)
but.setAttribute('onclick','destroy()')
but.style.background= 'yellow';
but.style.padding= '5px 15px';
but.style.margin= '15px 15px 0 0'

var but = document.createElement('button')
var text = document.createTextNode('Դադար')
but.appendChild(text)
document.body.appendChild(but)
but.setAttribute('onclick','cl()')
but.style.background= 'red';
but.style.padding= '5px 15px';

var i = 1;
function animate(){
    var l = Math.round(Math.random()*500)
    var t = Math.round(Math.random()*500)
    var wh = Math.round((Math.random()*100)+20)
    var r = Math.round((Math.random()*255)-1)
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
    smallDiv.style.lineHeight= wh + "px"
    smallDiv.setAttribute('onclick','e(this)')
    block.appendChild(smallDiv)
    smallDiv.innerHTML = i
    i++
}

var pause = 1;
function generate(){ 
    if(pause == 1){
        set = setInterval(animate,500);
        pause = 0;
        return;
    } 
}

function cl(){    
        if(pause == 0) {
       clearInterval(set);
        pause = 1;
        return;
    }
}


var j = 1;
function e(hid){
    hid.style.display = 'none'
    document.getElementById('demo').innerHTML = 'Անհետացած փուչիկի գույնն էր - ' + hid.style.background + '<br>' +
    'Անհետացած փուչիկի համարն էր - ' + hid.innerHTML + '<br>' + 'Անհետացավ - ' + j + ' հատ փուչիկ'
    j++
}

function destroy() {
   document.getElementById('demo').innerHTML = ""
   var block = document.getElementById('block');
   while (block.firstChild) {
    block.removeChild(block.firstChild)
   }
i=1;
j=1;
}