var inp = document.getElementById('demo')
var but = document.createElement('button')
but.innerHTML = "click me";
but.setAttribute('onclick','f()')
document.body.insertBefore(but, inp.nextSibling)

function f() {
  document.body.style.background = inp.value;
}