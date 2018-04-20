var but = document.createElement('button')
var text = document.createTextNode('Ներքև')
but.appendChild(text)
document.body.appendChild(but)
but.setAttribute('onclick','bottom()')
but.style.padding= '5px 15px';
but.style.margin= '15px 15px 0 0'

var but = document.createElement('button')
var text = document.createTextNode('Վերև')
but.appendChild(text)
document.body.appendChild(but)
but.setAttribute('onclick','topp()')
but.style.padding= '5px 15px';
but.style.margin= '15px 15px 0 0'

var but = document.createElement('button')
var text = document.createTextNode('Ձախ')
but.appendChild(text)
document.body.appendChild(but)
but.setAttribute('onclick','left()')
but.style.padding= '5px 15px';
but.style.margin= '15px 15px 0 0'

var but = document.createElement('button')
var text = document.createTextNode('Աջ')
but.appendChild(text)
document.body.appendChild(but)
but.setAttribute('onclick','right()')
but.style.padding= '5px 15px';
but.style.margin= '15px 15px 0 0'

var i = 40
function bottom(){
    if(i<=575){
        smallDiv.style.top = i + "px"
        i +=40;
    }
}

function topp(){
        if(i>=80){
        smallDiv.style.top = (i-80) + "px"
        i-=40;
    }
}
var j = 40
function left(){
    if(j>=80){
        smallDiv.style.left = (j-80) + "px"
        j -=40
    }
}

function right(){
    if(j<=575){
        smallDiv.style.left = j + "px"
        j +=40
    }
}
