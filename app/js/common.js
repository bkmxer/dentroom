$(document).ready(function() {
        $('a.menu-trigger').click(function(){
            $('nav ul').slideToggle(768);
        });
        $(window).resize(function(){
            if($(window).width()>768){
                $('nav ul').removeAttr('style');
            }
        })

        // var
        var $nav =  $('.nav-underline'),
            $line = $('<div>').appendTo($nav),
            $activeA,
            lineWidth,
            liPos;
        function refresh (){
            $activeA = $('nav li a.active');
            lineWidth = $activeA.parent().outerWidth();
            liPos =  $activeA.parent().position().left;
        }
        refresh();
        $nav.css('position', 'relative');

            // line setup
        function lineSet() {
            $line.addClass("hidden-xs");
            $line.css({
                'position':'absolute',
                'background-color':'#ffffff',
                'bottom':'0',
                'height': '3px'
            }).animate({
                'left': liPos,
                'width': lineWidth
            }, 200);
        }
        lineSet();

        //onClick
        $('nav a[href*="#"]').on('click', function() {

            $activeA.removeClass('active');
            $(this).addClass('active');
            refresh();
            lineSet();



        });

    $('.parallax-window').parallax({imageSrc: 'img/bg-room.jpeg'});
});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/*NAVIGATION BAR stickness START */

var $headerSection = $('.header');
var $navBarPosition = $('nav').outerHeight(true)+50;
$(window).scroll(function() {
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {}
    else{
        if ($(this).scrollTop() > $headerSection.offset().top + $headerSection.outerHeight(true)){
            $('.fixed_head').addClass("sticky");
            $('.aboutUs').css("paddingBottom", $navBarPosition);
        }
        else{
            $('.fixed_head').removeClass("sticky");
            $('.aboutUs').css("paddingBottom", "50px");
        }
    }

});


$('.table-cell').hover(
    function(){
        $(this).find('a').removeClass("hidden");

    },
    function(){
       $(this).find('a').addClass("hidden");
} )

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $('#upslider').addClass("hidden");

    } else {
        $('#upslider').removeClass("hidden");

    }
    lastScrollTop = st;
});


