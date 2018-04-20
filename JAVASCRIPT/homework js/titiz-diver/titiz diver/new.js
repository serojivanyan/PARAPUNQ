
var a =200
var b =500
var flag1=true;
var flag2=true
function f() {
var d=document.getElementById('demo2');
	d.style.width=a+"px";
	d.style.height=a+"px";
	if (a<600 && flag2) {
		a+=100;
		if (a==600) {
			flag2=false;
		}
	}
	else if(!flag2){
		a-=100;
		if (a==100) {
			flag2=true;
		}
	}
    var d=document.getElementById('demo1');
	d.style.width=b+"px";
	d.style.height=b+"px";
	if (b<=600 && flag1) {
		b-=100;
		if (b==100) {
			flag1=false;
		}
	}
	else if(!flag1){
		b+=100;
		if (b==600) {
			flag1=true;
		}
	}
}



