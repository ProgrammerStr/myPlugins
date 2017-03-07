'use strict';

var obj = {

   click : "header #bottombar .cart",
   box   : ".bodyShadow"

}

$(document).ready(function(){

    $(obj.click).mouseover(function(){

        $(obj.box).addClass('active');

    });

    $(obj.click).mouseout(function(){

        $(obj.box).removeClass('active');

    });

});