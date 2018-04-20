var table = "<table border='1' width= '100%' height = '30'>";
function f(){
        table += '<tr></tr>';
    table += '</table>';
    document.getElementById('table').innerHTML += table;
}

function e() {
        for(var i = 0; i<= document.getElementsByTagName('table').length-1; i++) {
          document.getElementsByTagName('tr')[i].innerHTML += "<td>";
        }
       
}
