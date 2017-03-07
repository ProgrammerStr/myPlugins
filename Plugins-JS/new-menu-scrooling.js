/*
- --------------------------- -
- F U L L Y F U N C T I O N S -
- --------------------------- -
*/

// - - - - - - - - - - -
// W I Z A R D
// A P P L I C A T I O N
// - - - - - - - - - - -
var Wapp = Wapp || {};

// - - - - - -
// M O D U L E
// - - - - - -


//----------------------------
// A D A P T E D :  F O R  G A B R I E L  P A D U A 
// H E L P I N G :  B R U N O
//----------------------------

Wapp.FullyFunctionsLuckysDay = {};

(function($, win, doc, vars) {
    'use strict';

    vars = {
        body            : 'body',
        contentLeft     : '#luckyDay .left',
        contentRight    : '#luckyDay .right',
        getProducts     : '.getProducts',
        offsetLimit     : '#luckyDay .left.fixed aside',
    };

    Wapp.FullyFunctionsLuckysDay.Init = function() {
        console.log(
            '- --------------------------- -\n' +
            '- F U L L Y F U N C T I O N S -\n' +
            '- --------------------------- -'
            );

        Wapp.FullyFunctionsLuckysDay.Listen();
        Wapp.FullyFunctionsLuckysDay.InitClick();
    };

    Wapp.FullyFunctionsLuckysDay.Listen = function() {
        $(win).on('scroll', Wapp.FullyFunctionsLuckysDay.Scroll);
    };

    Wapp.FullyFunctionsLuckysDay.Scroll = function(e) {
        Wapp.FullyFunctionsLuckysDay.FixedBar();
        Wapp.FullyFunctionsLuckysDay.StopBar();
    };

    Wapp.FullyFunctionsLuckysDay.InitClick = function(e) {
        $(vars.getProducts).click();
    };

    Wapp.FullyFunctionsLuckysDay.FixedBar = function(e) {
          
        if ($(vars.body).scrollTop() > 350) {
            $(vars.contentLeft).addClass('fixed');
            $(vars.contentRight).addClass('fixed');

        } else {
            $(vars.contentLeft).removeClass('fixed');
            $(vars.contentRight).removeClass('fixed');
        }
    };

    Wapp.FullyFunctionsLuckysDay.StopBar = function(e) {

        var menuBottom = $('.menuMoboBottom'),
            stop = null

        if($(window).scrollTop() >= (menuBottom.offset().top - $(vars.offsetLimit).height() - 60)){

            stop = $(window).scrollTop() - (menuBottom.offset().top - $(vars.offsetLimit).height() - 60);
            
            $(vars.offsetLimit).css({
                'top' :  (stop * -1)  + 'px'
            });

        }
        else {

            $(vars.offsetLimit).removeAttr('style');

        }

    }

    $(function() {
        Wapp.FullyFunctionsLuckysDay.Init();
    });

}(jQuery, window, document, 'Private'));