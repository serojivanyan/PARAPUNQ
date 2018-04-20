var images = ['2.jpg','3.jpg','4.jpg','5.jpg','1.jpg'];
var pic = document.getElementsByTagName('img')
var slider = document.getElementById('slider');

function prev() {
    clearInterval(set);
    for(var i=0; i<slider.children.length; i++){
        pic[i].src = images[i]      
    }
    var a = images.shift();
    images.push(a)       
}

function next() { 
    for(var i=0; i<slider.children.length; i++){
        pic[i].style.opacity = "0";        
        pic[i].src = images[i] 
        pic[length].style.opacity = "1";
        pic[length+1].style.opacity = "1";
    }
    var a = images.pop();
    images.unshift(a)
}

var set = setInterval(next,2000)


function over() {
          clearInterval(set);
}
 function out() {    
      set = setInterval(next, 2000); 
} 



