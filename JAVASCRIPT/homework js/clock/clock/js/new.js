$(document).ready(function($) {
setInterval( function() {
      var seconds = new Date().getSeconds();
      var sdegree = seconds * 6;
      var srotate = 'rotate(' + sdegree + 'deg)';

      $('#second').css({'-moz-transform' : srotate, '-webkit-transform' : srotate, '-o-transform' : srotate});

      }, 1000 );

      setInterval( function() {
      var hours = new Date().getHours();
      var mins = new Date().getMinutes();
      var hdegree = hours * 30 + (mins / 2);
      var hrotate = 'rotate(' + hdegree + 'deg)';

      $('#hour').css({'-moz-transform' : hrotate, '-webkit-transform' : hrotate, '-o-transform' : hrotate});

      }, 1000 );

      setInterval( function() {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = 'rotate(' + mdegree + 'deg)';

      $('#minute').css({'-moz-transform' : mrotate, '-webkit-transform' : mrotate, '-o-transform' : mrotate});

      }, 1000 );
    
    for (i=1;i<=6;i++) {
        $('#center').before('<div id="l'+i+'"></div>');
    }
    for (i=1;i<=30;i++) {
        $('#center').before('<div id="ln'+i+'"></div>');
        $('#ln'+i).css({
            "-moz-transform" : "rotate(" + i*6 + "deg)", 
            "-webkit-transform" : "rotate(" + i*6 + "deg)", 
            "-o-transform" : "rotate(" + i*6 + "deg)", 
            "padding" : "60px 1px 60px 0", 
            "left" : "60px", 
            "position" : "absolute",
            "display" : "block",
            "content" : "",
       });
    }
});
