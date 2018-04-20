//1.unenq var text = "one two litle 100". RegExp-i mijocov  veradarcnel miayn 100
/* var text = "one two litle 100";
var regExp = /\d{3}/g;
console.log(text.match(regExp)); */

/* 2.var date = "30-1-2017 8:45"
test() methodi mijocov stugel mer  nermutcat date patkanum e mer ReqExp i nshvatc dzevin */
/* var date = "30-10-2017 08:45";

var regExp = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}$/g;
console.log(regExp.test(date)); */

/* 3 unenc var text ="down cat hello mouse red click cat down click up to call cat mouse up red hello mouse red click cat down click up to call";
grel funckia vor stanum e erku argument,mek@ string (ays depqum mer haytararvatc text@),myus argumentn el vorpes number
ev katarum,nsvatc tvov vercnum e mer stringi meji bar@;ev mez veradarcnum e zangvatc vori mej ka texti mej bolor ayd barer@
ete grel enq 2 mer bar@ petq e vercni "hello" ete grel enq 0 mer barn e "down" */

/* var text ="down cat hello mouse red click cat down click up to call cat mouse up red hello mouse red click cat down click up to call";
function textFilter(str,num) {
	var arr2 = [];
	var exp = /\s/;
	var arr = str.split(exp);
	var exp2=arr[num];
	for(var i = 0;i<arr.length;i++) {
		if(exp2 == arr[i]) {
			arr2.push(arr[i]);
		}
	}
	console.log(arr2);

}
textFilter(text,2);
textFilter(text,4); */

//4.unenq var text = "the cia and fbi". petq e funkcia grel vor mez veradarcni "the CIA and FBI"
/* var text = "the cia and fbi";
var word = text.replace(/\b(fbi|cia)\b/g,function(str){
	return str.toUpperCase();
})
console.log(word);*/

/* function myFunc(name,email,password) {
  var nameReg = /^[A-Z][a-z]{3,}$/;
  var emailReg = /^[a-z]{4,}\.[a-z]{6,}@mail.ru$/;
  var passReg = /^[a-z]{7,}&\d{2,}/;
  
  var corName = nameReg.test(name);
  var corEmail = emailReg.test(email);
  var corPass = passReg.test(password);
  if(corName === true && corEmail === true && corPass === true) {
    console.log("Ok");
  }
  else {
    console.log("False");
  }
  
}

myFunc("Arsen","abcd.abcdefe@mail.ru","abcdefk&49"); */