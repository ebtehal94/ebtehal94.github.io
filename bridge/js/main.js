/*global $ */

$(function () {
    'use strict';
     // scroll to top
      $(window).scroll(function(){
        if($(this).scrollTop() > 300)
        {
            $('.scroll-to-top').fadeIn();
        }
        else {
            $('.scroll-to-top').fadeOut();
        }
    });
    
    $('.scroll-to-top').click(function(){
        $('html,body').animate({scrollTop : 0},800);
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })


});