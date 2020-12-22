$(function(){
    'use strict';
    

    //Scroll To Top
    
    $(window).scroll(function(){

        if ($(this).scrollTop() >= 100) {

             $ ('.scroll-to-top') .fadeIn(400);

            } else {

            $ ('.scroll-to-top') .fadeOut(400);
                
        }
    });
    
    $('.scroll-to-top ').click(function() {
        
        $('html , body').animate({scrollTop : 0},800);
        
    });
    




    //counter
    $('.counter').counterUp({
    delay: 10,
    time: 1000
    });
    
    



});