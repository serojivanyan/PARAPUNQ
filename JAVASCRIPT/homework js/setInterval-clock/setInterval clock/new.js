var myDiv = document.createElement('div');
myDiv.style.width = 600+'px';
myDiv.style.height = 600+'px';
myDiv.style.background = 'black';
myDiv.style.margin = 50 + 'px';
myDiv.style.overflow = 'hidden';
myDiv.style.position = 'relative';
myDiv.setAttribute('id','myDiv')
document.body.appendChild(myDiv);

var myLine = document.createElement('div')
myLine.setAttribute('id','myline');
myDiv.appendChild(myLine)



var color = function () {return Math.floor(Math.random() * 256)};
setInterval(function (){
    myLine.style.backgroundColor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
}, 1000);

var state = 1;
var sdegree = 0;
function left(){    
    if (state == 1){ 
        sdegree -=.1        
        var srotate = 'rotateZ(' + sdegree + 'deg)';
    } else if (state == 2) {
        sdegree +=.1
        var srotate = 'rotateZ(' + sdegree + 'deg)';
    } 
    if (state == 1 && (sdegree <= -90) ){
        state = 2;
    } else if (state == 2 && (sdegree >= 90)) {
        state = 1;       
    }
    myLine.style.transform = srotate;
}
var set = setInterval(left, 5);

document.getElementById('myDiv').appendChild(myLine);





