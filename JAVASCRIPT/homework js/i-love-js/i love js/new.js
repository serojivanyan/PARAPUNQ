
var str = "I love javaScript",
    dest = document.getElementById("pageText"),
    demo = document.getElementById("demo"),
    symbols = str.split(''); 

demo.style.fontSize = 50 + 'px';
dest.style.fontSize = 50 + 'px';

var now=0,
    latters = 1;
    function col(){return Math.floor(Math.random() * 256)};
function show(){
    if(now < str.length)
    {           
        dest.innerHTML += str.substr(now,latters);     
        now+=latters;         
        dest.style.color = 'rgb(' + col() + ',' + col() + ',' + col() + ')';
    }
    else
    {  
        dest.innerHTML = dest.innerHTML.slice(0,-1); 
        dest.style.color = 'rgb(' + col() + ',' + col() + ',' + col() + ')';
    }
    for (var i = 0; i < demo.children.length; i++) {
        demo.children[i].style.color = 'rgb(' + col() + ',' + col() + ',' + col() + ')'; 
        demo.children[i].style.visibility = 'visible'
    }
    setTimeout(show,200)
}

symbols.forEach(function(item, i, arr) {
    var span = document.createElement('span');
    span.innerHTML = item;
    demo.appendChild(span);
  });   


