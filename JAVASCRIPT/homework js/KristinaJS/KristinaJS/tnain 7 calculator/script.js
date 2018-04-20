var input=document.getElementById("inp")

function n(tver){
	input.value+=tver.innerHTML
}

function n1() {
	input.value=""
}

var a,b,gorc;

function f(sum){
	if(sum.innerHTML=="+"){
		a=input.value;
		input.value=" ";
		gorc="gumar"
	}



	if(sum.innerHTML=="-"){
		a=input.value;
		input.value=" "
		gorc="hanum";
	}



	if(sum.innerHTML=="*"){
		a=input.value
		input.value=""
		gorc="baz"
	}



	if(sum.innerHTML=="/"){
		a=input.value
		input.value=""
		gorc="baj"
	}



	if(sum.innerHTML=="="){
		b=input.value
		    if (gorc=="gumar") {
			inp.value=Number(a)+Number(b)
		    }

			if (gorc=="hanum") {
			inp.value=Number(a)-Number(b)
		    }

		   if (gorc=="baz") {
			inp.value=Number(a)*Number(b)
		    }

		   if (gorc=="baj") {
			inp.value=Number(a)/Number(b)
		   }
	}

}





