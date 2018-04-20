
     var div=document.getElementById('d1')
     var div2=document.getElementById("d2")
     var div3=document.getElementById("d3")
     var input=document.getElementById("inp")




function f(){
     var reg=/[a-z]{1,}/i
     var reg1=/[1-9]{1,}/ig
     var reg2=/[ա-ֆ]{1,}/ig
     var str=input.value;

    if(input.value.search(reg)!=-1){

    		div.innerHTML+=str.match(reg)+"<br>"
    		input.value=""
    }
    else if(input.value.search(reg1)!=-1){
    	    div2.innerHTML+=str.match(reg1)+"<br>"
    		input.value=""
    }
    else if(input.value.search(reg2)!=-1){
            div3.innerHTML+=str.match(reg2)+"<br>"
            input.value=""
    }
}


var srt1="background-color:#561524,color:#158254"
var reg1=/#[a-z 0-9]{6}/ig
alert(srt1.match(reg1))