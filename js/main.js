$(document).ready(function() {
    $('.side-nav li').click(function() {
        if(!$(this).hasClass("is-active")) {
            if ($('.side-nav li').hasClass('is-active')) {
                $('.side-nav li').removeClass('is-active');
                $('.side-nav li').addClass('none-active');
            }
            $(this).removeClass('none-active');
            $(this).toggleClass('is-active');
        }
    });    
});