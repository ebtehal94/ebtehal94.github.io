$(function(){
    'use strict';
    
    // Fixed Navbar
    
    $(window).on('scroll', function() {
       if($(window).scrollTop()) {
           $('.navbar').addClass('fixed');
       }
        else {
            $('.navbar').removeClass('fixed') ;
        }
    });
    
    // Smothely to Element
    
    $('.nav-link').click(function(e) {
        e.preventDefault();
        
         $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

        }, 1000);
        
    
    });
    
    $('.q .header').click(function(){
        $('.q p').slideToggle();
    });

});

