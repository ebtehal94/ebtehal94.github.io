/*global $ */

$(function () {
    'use strict';
    $('.about-tab li').click(function (){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.about-info div').hide();
        $('.' + $(this).data('class')).fadeIn(800);
    });
    $('.border-tab').click(function(){
        $('.about-info div').css('border-top-right-radius','0');
    });
});