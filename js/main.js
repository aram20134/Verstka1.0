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
        if ($('.Home').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $('.main-content li:nth-child(1)').addClass('content-is-active');
        }
        if ($('.Works').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $('.main-content li:nth-child(2)').addClass('content-is-active');
        }
        if ($('.About').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $('.main-content li:nth-child(3)').addClass('content-is-active');
        }
        if ($('.Contact').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $('.main-content li:nth-child(4)').addClass('content-is-active');
        }
        if ($('.HireUs').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $('.main-content li:nth-child(5)').addClass('content-is-active');
        }
    });
});

