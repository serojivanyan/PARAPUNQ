
function n() {
    for (var i = 0; i<6; i++) {
        
    var d = document.getElementsByTagName('a')[i]   
    
    d.innerHTML = +(d.innerHTML) + 1
    }
}

function p() {
    for (var i = 0; i<6; i++) {
        
    var d = document.getElementsByTagName('a')[i] 
    
    if(document.getElementsByTagName('a')[0].innerHTML > 1){
        
    d.innerHTML -= 1
        }
    }
}