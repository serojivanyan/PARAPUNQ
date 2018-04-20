
function check(fio) {
    
var arr = fio.split("|")
  while(!arr[0] || !arr[1] || !arr[2]){      
    alert(fio + " -mutqagrman dashti standartin chi hamapatasxanum")
     var fio = prompt("anun | azganun | hayranun")      
     var arr = fio.split("|")
  }    
document.write(arr[0] + "<br>")
document.write(arr[1] + "<br>")
document.write(arr[2] + "<br>")

}

check(prompt("anun | azganun | hayranun"))







