function myFunc(){
    var str = document.getElementById("text").value;
    var reg1 = /[a-z]/ig
    var reg2 = /[а-я]/ig
    var reg3 = /[ա-ֆ]/ig
    var result1 = str.match(reg1)
    var result2 = str.match(reg2)
    var result3 = str.match(reg3)
    if(result1){
        document.getElementById("en").innerHTML = str;
       } else if(result2) {
        document.getElementById("rus").innerHTML = str;
       } else if(result3) {
        document.getElementById("arm").innerHTML = str;
       } 
    document.getElementById("text").value = "";
}