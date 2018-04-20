var myDiv = document.createElement('div');
var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");

var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider1.oninput = function() {
    myDiv.style.width = this.value + 'px';
    myDiv.style.height = this.value +'px';
    output1.innerHTML = this.value;
  }
  slider2.oninput = function() {
    myLine.style.height = this.value + 'px';
    myLine.style.width = this.value + 'px';
    output2.innerHTML = this.value;
  }
  slider3.oninput = function() {
    output3.innerHTML = 9 - this.value;
  }

myDiv.style.background = 'black';
myDiv.style.position = 'relative';
myDiv.setAttribute('id','myDiv');

document.body.appendChild(myDiv);

var myLine = document.createElement('div')
myLine.style.position = 'absolute';
myLine.style.left = 0;
myLine.style.top = 0;
myLine.style.backgroundColor = "lime"
myLine.style.borderRadius = slider2.value*50 + 'px'
myLine.setAttribute('id','myline');

var color = function () {return Math.floor(Math.random() * 256)};
setInterval(function (){
    myLine.style.backgroundColor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
}, 1000);

var thisLeft = 0;
var thisTop = 0;
var state = 1;

function topp(){   
    if (state == 1){
        thisTop += 1;
        thisLeft += .5;
    } else if (state == 2) {
        thisTop -= 1;
        thisLeft += .5;
    } else if (state == 3) {
        thisTop += 1;
        thisLeft -= .5;
    } 
    else if (state == 4) {
        thisTop -= 1;
        thisLeft -= .5;
    } 

    if (state == 1 && (thisTop > (slider1.value-slider2.value)) ){
        state = 2;
    } else if (state == 2 && (thisTop <= 0) || (thisLeft > (slider1.value-slider2.value))){
        state = 3;       
    }
    else if (state == 3 && (thisTop > (slider1.value-slider2.value)) ){
        state = 4;       
    }
    else if (state == 4 && (thisTop <= 0 || thisLeft <=0)){
        state = 1;       
    }
    myLine.style.top = thisTop + 'px';
    myLine.style.left = thisLeft + 'px';
    document.getElementById('myDiv').appendChild(myLine);    
    setTimeout(topp, 9-slider3.value);
}











