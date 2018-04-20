var myDiv = document.createElement('div');
myDiv.style.width = 600+'px';
myDiv.style.height = 600+'px';
myDiv.style.background = 'black';
myDiv.style.position = 'relative';
myDiv.setAttribute('id','myDiv')
document.body.appendChild(myDiv);

var myLine = document.createElement('div')
myLine.style.width = 50+'px';
myLine.style.height = 600+'px';
myLine.style.position = 'absolute';
myLine.style.left = 0;
myLine.style.backgroundColor = "lime"
myLine.setAttribute('id','myline');

var color = function () {return Math.floor(Math.random() * 256)};
setInterval(function (){
    myLine.style.backgroundColor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
}, 11000);

var thisLeft = 0;
var state = 1;

function left(){
    
    if (state == 1){
        thisLeft += 50;
    } else if (state == 2) {
        thisLeft -= 50;
    } 
    if (state == 1 && (thisLeft >= 550) ){
        state = 2;
    } else if (state == 2 && (thisLeft == 0)) {
        state = 1;       
    }
    myLine.style.left = thisLeft +'px';
}
var set = setInterval(left, 1000);



document.getElementById('myDiv').appendChild(myLine);





