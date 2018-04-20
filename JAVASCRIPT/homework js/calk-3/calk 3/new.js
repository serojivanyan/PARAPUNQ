var inp = document.getElementById("text")

function displayNum(tver) {
    inp.value += tver.innerHTML;
}

function c() {
    inp.value = ""
    
}

function e(){
    inp.value = inp.value.slice(0,-1)
}

var   a , b, gorc;


function operation(sum) {
    if(sum.innerHTML == "+") {
        a = inp.value;
        inp.value = "";
        gorc = "gumar"
    }
    if(sum.innerHTML == "-") {
        a = inp.value;
        inp.value = "";
        gorc = "hanum"
    }
    if(sum.innerHTML == "*") {
        a = inp.value;
        inp.value = "";
        gorc = "bazmap"
    }
    if(sum.innerHTML == "/") {
        a = inp.value;
        inp.value = "";
        gorc = "bajan"
    }
    if(sum.innerHTML == "=") {
        b = inp.value;
        if(gorc == "gumar") {
            inp.value = Number(a) + Number(b)
        }
        if(gorc == "hanum") {
            inp.value = Number(a) - Number(b)
        }
        if(gorc == "bazmap") {
            inp.value = Number(a) * Number(b)
        }
        if(gorc == "bajan") {
            inp.value = Number(a) / Number(b)
        }

    }

}




