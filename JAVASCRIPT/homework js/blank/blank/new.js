function f(){
	var d = document.getElementById('but')
	var div1 = document.getElementById('block')
	if(d.value == "start"){
		d.value = "stop";
		div1.style.display = "block";
		return;
	}
	if (d.value == "stop") {
		d.value = "start";
		div1.style.display = "none";
		baza.style.display = "none";
		return;
	} 
}

/* function e(){
	var inp1 = document.getElementById('inp1');
	var inp2 = document.getElementById('inp2');	
	var baza = document.getElementById('baza');
	baza.style.display = "block";
	var li = document.createElement('li')
	var text1 = document.createTextNode(inp1.value + " ");
	var text2 = document.createTextNode(inp2.value + " ");
	li.appendChild(text1);
	li.appendChild(text2);
	var ol = document.getElementById('ol');
	ol.appendChild(li)

	var cl = document.createElement('button');
	cl.innerHTML = "x"
	cl.style.color ="red"
	cl.setAttribute('onclick','d(this)')
	li.insertBefore(cl, li.nextSibling)
}
function d(clear) {
	clear.parentNode.parentNode
	.removeChild(clear.parentNode);
} */

function e(){
	var inp1 = document.getElementById('inp1');
	var inp2 = document.getElementById('inp2');	
	var baza = document.getElementById('baza');
	baza.style.display = "block";
	var ol = document.getElementById('ol');
	ol.innerHTML += '<li>' + inp1.value + " " + inp2.value + " " + '</li>'
	var cl = document.createElement('button');
	cl.innerHTML = "x"
	cl.style.color ="red"
	cl.setAttribute('onclick','d(this)')
	var li = document.querySelectorAll('li')
	for(var x=0; x<li.length; x++){
		li[x].insertBefore(cl, li.nextSibling)
	}	
	
}

function d(clear) {
	clear.parentNode.parentNode
	.removeChild(clear.parentNode);
}