
function generateTable(){
     var d = document.getElementById('text').value.substring(6),
         rows = d.split(' ')[0],
         columns = d.split(' ')[1],
         table = "<table border='2' cellpadding='50'>"
    for( var i = 1; i <= rows; i++ ){
 
            table += '<tr>';
 
            for( var j = 1; j <= columns; j++ ){
                
                table += "<td></td>";                
            }
            
            table += '</tr>';
        }
        table += '</table>';
        document.getElementById('table').innerHTML = table;
}

function destroyTable() {
    document.getElementById('table').innerHTML = "";
    var d = document.getElementById('text');
        d.value = d.value.slice(0,6); // կամ d.value = d.value.substring(0,6);
    }