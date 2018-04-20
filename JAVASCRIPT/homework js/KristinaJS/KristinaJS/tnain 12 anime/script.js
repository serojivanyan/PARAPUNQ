var g=document.getElementById('gndak')
var leftt=60;
var topp=50;
var dirq="aj"


function f(){
	    if(dirq=="aj"){
		leftt+=10;
		topp+=4;
		    if(topp>=220){
			    dirq="dzax"
		    }
	    }

		if(dirq=="dzax"){
			topp+=3;
			leftt-=10;
			if(leftt<=50){
				dirq="verev"
			}
		}


		if(dirq=="verev"){
			topp-=10;
			 if(topp<=50){
			 	dirq="aj"
			 }
		}

	g.style.left=leftt+"px"
	g.style.top=topp+"px"
	
}

setInterval(f,100);