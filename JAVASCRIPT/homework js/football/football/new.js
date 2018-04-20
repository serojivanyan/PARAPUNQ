
var thisLeft = 83;
var thisTop = 83;
var state = 1;
var b = document.getElementById('demo');

function animate(){
    
    if (state == 1){
        thisLeft += 10;
        thisTop +=10;

    } else if (state == 2) {
        thisTop +=10;
        thisLeft -= 10;

    } else if (state == 3) {
        
        thisTop -= 10;
        
    }

    if (state == 1 && (thisLeft >= 283) ){
        state = 2;
    } else if (state == 2 && (thisLeft == 83)) {
        state = 3;
    } else if (state == 3 && (thisTop <= 83)) {
        state = 1;
    }

    b.style.left = thisLeft +"px";
    b.style.top = thisTop +"px";
}

var set = setInterval(animate, 200);

function stop() {
    clearInterval(set)
}