window.onscroll = function() {scrollTop()};

var t = 0
function scrollTop(){
    document.getElementById('demo').innerHTML = t+=1;
    if (t > 20) {
        document.getElementById("btn").style.display = "block";
        
    } 
}

function onTop() {
    //document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("btn").style.display = "none";
    t = 0;
}
