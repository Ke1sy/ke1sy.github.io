$(document).ready(function () {
    isActiveAcc();
    isActiveToggle();
    $('#accordion .acc-head').on('click',f_acc);
    $('#toggle .toggle-head').on('click',f_toggle);

    $( "#tabs" ).tabs();
    $( "#tabs2" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs2 li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

    $(".spincrement").spincrement({
        from: 0,
        to: false,
        duration: 2000
    });
});

function f_acc() {
    $('#accordion .acc-body').not($(this).next()).slideUp(500);
    ($(this).next()).slideToggle(500);
    $('#accordion .acc-head').not($(this)).removeClass("active");
    $(this).toggleClass("active");
}


function f_toggle() {
    ($(this).next()).slideToggle(500);
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }
    else{
        $(this).addClass("active");
    }
}

function isActiveAcc() {
     $('#accordion .acc-head.active').next().show();
}

function isActiveToggle() {
    $('#toggle .toggle-head.active').next().show();
}


function resetValue() {
    var resButton = document.getElementById('search-reset');
    var input = document.getElementById('header-search-input');
    resButton.onclick = function () {
        input.value = '';
    }
}
