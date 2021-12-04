$(document).ready(function() {

        // SCRYPT FOR NAV

    $('.side-nav li').click(function() {
        if(!$(this).hasClass("is-active")) {
            if ($('.side-nav li').hasClass('is-active')) {
                $('.side-nav li').removeClass('is-active');
                $('.side-nav li').addClass('none-active');
            }
            $(this).removeClass('none-active');
            $(this).toggleClass('is-active');
        }

        // SCRYPT FOR CONTENT

        if ($('.Home').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $("ul.main-content > li:nth-child(1)").addClass('content-is-active');
        }
        if ($('.Works').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $("ul.main-content > li:nth-child(2)").addClass('content-is-active');
        }
        if ($('.About').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $("ul.main-content > li:nth-child(3)").addClass('content-is-active');
        }
        if ($('.Contact').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $("ul.main-content > li:nth-child(4)").addClass('content-is-active');
        }
        if ($('.HireUs').hasClass("is-active")) {
            $('.main-content li').removeClass('content-is-active');
            $("ul.main-content > li:nth-child(5)").addClass('content-is-active');
        }
    });
    // SCRYPT FOR BTN-WORK (RIGHT, LEFT)
    function left1() {
        $("ul.slider > li:nth-child(2)").removeClass('img-center').addClass('img-right');
        $("ul.slider > li:nth-child(2) div").removeClass('img-active');
        $("ul.slider > li:nth-child(2) p").removeClass('title-work-active').removeClass('text-work-active');
        
        $("ul.slider > li:nth-child(3)").removeClass('img-right').addClass('img-left');

        $("ul.slider > li:nth-child(1)").removeClass('img-left').addClass('img-center');
        $("ul.slider > li:nth-child(1) div").addClass('img-active');
        $("ul.slider > li:nth-child(1) p").last().addClass('text-work-active');
        $("ul.slider > li:nth-child(1) p").first().addClass('title-work-active');
    }
    function left2() {
        $("ul.slider > li:nth-child(2)").removeClass('img-right').addClass('img-left');
          
        $("ul.slider > li:nth-child(3)").removeClass('img-left').addClass('img-center');
        $("ul.slider > li:nth-child(3) div").addClass('img-active');
        $("ul.slider > li:nth-child(3) p").last().addClass('text-work-active');
        $("ul.slider > li:nth-child(3) p").first().addClass('title-work-active');

        $("ul.slider > li:nth-child(1)").removeClass('img-center').addClass('img-right');
        $("ul.slider > li:nth-child(1) div").removeClass('img-active');
        $("ul.slider > li:nth-child(1) p").removeClass('title-work-active').removeClass('text-work-active');
    }
    function left3() {
        $("ul.slider > li:nth-child(2)").removeClass('img-left').addClass('img-center');
        $("ul.slider > li:nth-child(2) div").addClass('img-active');
        $("ul.slider > li:nth-child(2) p").last().addClass('text-work-active');
        $("ul.slider > li:nth-child(2) p").first().addClass('title-work-active');

        $("ul.slider > li:nth-child(3)").removeClass('img-center').addClass('img-right');
        $("ul.slider > li:nth-child(3) div").removeClass('img-active');
        $("ul.slider > li:nth-child(3) p").removeClass('title-work-active').removeClass('text-work-active');

        $("ul.slider > li:nth-child(1)").removeClass('img-right').addClass('img-left');
    }
    $('.btn-left').on('click', function() {
        if($("ul.slider > li:nth-child(2)").hasClass('img-center')) {
            left1();
        } else if($("ul.slider > li:nth-child(1)").hasClass('img-center')) {
            left2();
        } else {
            left3();
        }
    });
    function right1() {
        $("ul.slider > li:nth-child(2)").removeClass('img-center').addClass('img-left');
            $("ul.slider > li:nth-child(2) div").removeClass('img-active');
            $("ul.slider > li:nth-child(2) p").removeClass('title-work-active').removeClass('text-work-active');
            
            $("ul.slider > li:nth-child(3)").removeClass('img-right').addClass('img-center');
            $("ul.slider > li:nth-child(3) div").addClass('img-active');
            $("ul.slider > li:nth-child(3) p").last().addClass('text-work-active');
            $("ul.slider > li:nth-child(3) p").first().addClass('title-work-active');

            $("ul.slider > li:nth-child(1)").removeClass('img-left').addClass('img-right');
    }
    function right2() {
        $("ul.slider > li:nth-child(2)").removeClass('img-left').addClass('img-right');
          
        $("ul.slider > li:nth-child(3)").removeClass('img-center').addClass('img-left');
        $("ul.slider > li:nth-child(3) div").removeClass('img-active');
        $("ul.slider > li:nth-child(3) p").removeClass('title-work-active').removeClass('text-work-active');

        $("ul.slider > li:nth-child(1)").removeClass('img-right').addClass('img-center');
        $("ul.slider > li:nth-child(1) div").addClass('img-active');
        $("ul.slider > li:nth-child(1) p").last().addClass('text-work-active');
        $("ul.slider > li:nth-child(1) p").first().addClass('title-work-active');
    }
    function right3() {
        $("ul.slider > li:nth-child(2)").removeClass('img-right').addClass('img-center');
        $("ul.slider > li:nth-child(2) div").addClass('img-active');
        $("ul.slider > li:nth-child(2) p").last().addClass('text-work-active');
        $("ul.slider > li:nth-child(2) p").first().addClass('title-work-active');

        $("ul.slider > li:nth-child(3)").removeClass('img-left').addClass('img-right');

        $("ul.slider > li:nth-child(1)").removeClass('img-center').addClass('img-left');
        $("ul.slider > li:nth-child(1) div").removeClass('img-active');
        $("ul.slider > li:nth-child(1) p").removeClass('title-work-active').removeClass('text-work-active');
    }
    $('.btn-right').on('click', function() {
        if($("ul.slider > li:nth-child(2)").hasClass('img-center')) {
            right1();
        } else if($("ul.slider > li:nth-child(3)").hasClass('img-center')) {
            right2();
        } else {
            right3();
        }
    });
});