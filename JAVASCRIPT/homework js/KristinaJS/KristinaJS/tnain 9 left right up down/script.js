var m=document.getElementById('mec')
var p=document.getElementById("poqr")
var a=8;
var b=8;
var set;
function ff() {
	if(a<=528){
	a+=10;
	p.style.left=a+"px"

}
}
function f() {
	clearInterval(set)
	set=setInterval(ff,100)
}


function gg() {
    if(a>=0){
	a-=10;
	p.style.left=a+"px";
	
}
}

function g() {
	clearInterval(set)
	set=setInterval(gg,100)
}


function uu() {
	if(b>0){
	b-=10;
	p.style.top=b+"px";
}
}

function u() {
	clearInterval(set)
	set=setInterval(uu,100)
}

function dd() {
	if(b<=350){
	b+=10;
	p.style.top=b+"px";
}
}

function d() {
	clearInterval(set)
	set=setInterval(dd,100)
}



