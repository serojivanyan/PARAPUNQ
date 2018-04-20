var tiv=document.getElementsByTagName('div')
var arr=[1,2,3,4,5,6,7,8,9,10]


    function slide(){
   
   for(var i=0;i<tiv.length;i++){
   	tiv[i].innerHTML=arr[i]
   }
}	

function g(){
	var a=arr.shift();
	arr.push(a);
	slide();
}


function f(){
	var a=arr.pop();
	arr.unshift(a);
	slide();
}
