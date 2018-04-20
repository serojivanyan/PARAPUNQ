$(document).ready(function () {   
   
    // draggable
    $( ".glass" ).draggable({
        containment: "#limit",
        revert: "invalid",
        helper: "clone",
        cursor: "move"
    });
    
    var countGlass = 0;
    var total = 0;
    
    // droppable
    $( ".cart" ).droppable({
        accept: ".catalog .glass",
        activeClass: "highlight",
        drop: function( event, ui ) {
            $('.order').show();
            var glass = $(ui.draggable);
            // count
            countGlass++;
            $('.order strong:first').text(countGlass);
            // price
            total += parseInt(glass.find('strong').text());
            $('.order strong:last').text(total);
            // move
            glass.fadeOut(200, function () {
                $(this).appendTo('.cart').fadeIn(200);
            });
      }
    });
    $( ".catalog" ).droppable({
        accept: ".cart .glass",
        activeClass: "highlight",
        drop: function( event, ui ) {
            var glass = $(ui.draggable);
            // count
            countGlass--;
            $('.order strong:first').text(countGlass);
            if (countGlass == 0) { $('.order').hide(); }
            // price
            total -= parseInt(glass.find('strong').text());
            $('.order strong:last').text(total);
            // move
            glass.fadeOut(200, function () {
                $(this).appendTo('.catalog').fadeIn(200);
            });
      }
    });
    // sortable
    $( "#sortable" ).sortable({
        placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
    // selectable
    $( "#selectable" ).selectable();
    // effects
    $('#effects').click(function () {
        $('h1').switchClass('new', 'highlight', 1000);
    });
    // effect
    $('#my_form').submit(function () {
        var myInput = $('input[name=email]');
        if (myInput.val() == '') {
            myInput.css({ 'background-color' : '#CE0C0D' }).effect('pulsate', function () {
                myInput.css({ 'background-color' : '#fff' });
            });
            return false;
        }
    });
    
});