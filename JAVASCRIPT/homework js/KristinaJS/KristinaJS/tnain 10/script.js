   var mecdiv=document.getElementById('mec')
    var poqrdiv=document.getElementById("poqr")
function f(){
    var div=document.createElement("div")
    mecdiv.appendChild(div);
    var x=Math.round(Math.random()*450);
    var y=Math.round(Math.random()*450);
    var z=Math.round(10+Math.random()*40);
    div.style.width=z+"px";
    div.style.height=z+"px";
    div.style.border="2px solid";
    div.style.borderRadius = "50%";
    div.style.position="absolute";
    div.style.left=x+"px";
    div.style.right=x+"px";
    div.style.top=y+"px";
    div.style.bottom=y+"px";
    var r=Math.round(Math.random()*255);
	var g=Math.round(Math.random()*255);
	var b=Math.round(Math.random()*255);
    div.style.backgroundColor="rgb("+r+","+g+","+b+")"
    div.setAttribute("onclick","g(this)") ;


   
}

     var b=0;
     function g(a) {
     mecdiv.removeChild(a)
      b++;
      poqrdiv.innerHTML=b
      
      }



