var images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg',];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length-1) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

var set = setInterval(next,1000)
var pause = 0;
function over() {
        if (pause == 0) 
        {
          clearInterval(set);
          pause = 1;
          return;
        }
}
 function out() {    
    if (pause == 1) 
    {
      set = setInterval(next, 1000); 
      pause = 0;
      return;
    }
} 


