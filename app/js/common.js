
$(document).ready(function() {
    $('.preloader').fadeOut('slow');
    AOS.init();

        $('a.menu-trigger').click(function(e){
            $('nav ul').slideToggle(768);
            e.preventDefault();
        });
        $(window).resize(function(){
            if($(window).width()>768){
                $('nav ul').removeAttr('style');
            }
        })
        $('.nav-underline.fixed_head ul li a').click(function(){
            if (screen.width<=768){
                $('nav ul').hide();
                console.log('hidden');
            }

        })


        // var
        var $nav =  $('.nav-underline'),
            $line = $('<div>').appendTo($nav),
            $activeA,
            lineWidth,
            liPos;
        function refresh (){
            if (screen.width>=768){
                $activeA = $('nav li a.active');
                lineWidth = $activeA.parent().outerWidth();
                liPos =  $activeA.parent().position().left;
            }
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

            if (screen.width>=768){
                $activeA.removeClass('active');
                $(this).addClass('active');
                refresh();
                lineSet();
            }



        });

    $('.parallax-window').parallax({imageSrc: 'img/bg-room.jpeg'});

    /*
     *  Simple image gallery. Uses default settings
     */

    $('.fancybox').fancybox();

    /*
     *  Different effects
     */

    // Change title type, overlay closing speed
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                locked : false
            }
        }
    });


    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});


/*$('.service_box').hover(
 function(){
 $(this).find('ul').slideDown('slow');
 },
 function(){
 $(this).find('ul').hide('slow');
 });*/

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

        if ($(this).scrollTop() > $headerSection.offset().top + $headerSection.outerHeight(true)) {
            $('.fixed_head').addClass("sticky");
            $('.aboutUs').css("paddingBottom", $navBarPosition);
        }
        else{
            $('.fixed_head').removeClass("sticky");
            $('.aboutUs').css("paddingBottom", "50px");


};
 })

$('.table-cell').hover(
    function(){
        $(this).find('a').slideDown("normal");

    },
    function(){
       $(this).find('a').slideUp("normal");
} )

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop || st< 800){
        $('#upslider').addClass("hidden");

    } else {
        $('#upslider').removeClass("hidden");

    }
    lastScrollTop = st;
});

 //FANCYBOX section start



//FANCYBOX section end

(function () {
    $('.nav-underline').on('click', function() {
        $('.bar').toggleClass('animate');
    })
    $('.nav-underline ul li a').on('click', function() {
        $('.bar').toggleClass('animate');
    })
})();

$( ".doc_certf_btn" ).click(function() {
    event.preventDefault();
    $(".toggle_certf" ).slideToggle( "normal", function() {
        // Animation complete.
    });
});
// navigationbar active changes
