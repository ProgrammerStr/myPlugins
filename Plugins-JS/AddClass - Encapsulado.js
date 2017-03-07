//************************************************ 
// A D D  C L A S S  F O R  R O S A N A  - H E A D E R - C A R T 
// C R E A T E D  BY G A B R I E L  D E  P A D U A 
//************************************************
(function($, w, d, obj){
  'use strict';

  obj = {

      date     		:  new Date(),
	  htmlBody 		: 'body, html',
	  body          : 'body',

      click         : "header .buttons .menuButton",
      box           : "#mainMenu",
      active        : ".active"

  };


obj.Init = function (debug) {

    obj.activeMenuPadovani();


};

obj.activeMenuPadovani = function (e) {

        $(obj.click).click(function(){

            $(obj.box).addClass('active');

        });
}


$(document).ready(function(){
     obj.Init();
});
 


}(jQuery, window, document, 'Private'));