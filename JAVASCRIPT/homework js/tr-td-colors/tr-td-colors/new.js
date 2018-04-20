
function addTable() {
      var body = document.querySelector("body"), 
          numRows = document.getElementById("rows"),
          numColumns = document.getElementById("columns"),
          rows = numRows.value,
          columns = numColumns.value,
          tr = "",
          td = "",
          firstTable = document.querySelector("table")
          table = document.createElement("table")
          table.setAttribute("border", "2")      
          table.setAttribute("cellpadding", "50") 
      for (var i = 0; i < rows; i++) {
          tr = document.createElement("tr")
      for (var j = 0; j < columns; j++) {
          td = document.createElement("td")
          if((i + j) %2 == 0){
                var r = Math.round(Math.random()*255)
                var g = Math.round(Math.random()*255)
                var b = Math.round(Math.random()*255)
                var color = "rgb"+"("+(r+"," +g+ "," +b)+")"
          td.setAttribute("style", "background:rgb"+"("+(r+"," +g+ "," +b)+")")
          td.setAttribute("onclick", "alert(this.style.background)")
              }
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      if (firstTable == null) {
        return body.appendChild(table);
      } else {
        var newTable = body.appendChild(table);
        return document.body.replaceChild(newTable, firstTable);
      }
    }

    function destroyTable() {
      var body = document.querySelector("body"),
          table = document.querySelector("table"),
          numRows = document.getElementById("rows"),
          numColumns = document.getElementById("columns")
      
      if (document.querySelector("table") != null) {
          document.body.removeChild(table)
          numRows.value = ""
          numColumns.value = ""
      }
    }