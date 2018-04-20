var d = document.getElementById("text")

function displayNum(n){
    d.value +=n;
}
function f(){
    d.value =eval(d.value)
}
function c(){
    d.value =""
}
function e(){
    d.value = d.value.slice(0,-1)
}
