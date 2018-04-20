/*function carr(color, mark, year) {
    this.color = color;
    this.mark = mark;
    this.year = year;
}
var c = prompt("meqenai guyn@")
var m = prompt("meqenai markan")
var y = prompt("taretiv@")

var car = new carr(c,m,y)

document.writeln(car.color + " | " + car.mark + " | " + car.year )*/


var user = {
    color: "",
    mark: "",
    year:"",

get test1() {
    return this.color
},
get test2() {
    return this.mark
},
get test3() {
    return this.year
},
set test1(a){
    this.color = a
    return this.color 
},
set test2(b){
    this.mark = b
    return this.mark
},
set test3(c){
    this.year = c
    return this.year
}
}
user.test1 = prompt("guyn@")
user.test2 = prompt("mark")
user.test3 = prompt("mark")
document.write(user.test1 + " | " + user.test2 + " | " + user.test3)

