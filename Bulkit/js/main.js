$(function () {

    'use strict';
    
    // Fixed Navbar
    
    $(window).on('scroll', function() {
        if($(window).scrollTop()){
            $('nav') .addClass('fixed');    
        }
        
        else {
            $('nav') .removeClass('fixed'); 
        }
       
    });
    
    //Scroll To Top
    
    $(window).scroll(function(){

        if ($(this).scrollTop() >= 1000) {

             $ ('.scroll-to-top') .fadeIn(400);

            } else {

            $ ('.scroll-to-top') .fadeOut(400);
                
        }
    });
    
    $('.scroll-to-top ').click(function() {
        
        $('html , body').animate({scrollTop : 0},800);
        
    });
    
    
    
    
    

         
         

        

   
    
});