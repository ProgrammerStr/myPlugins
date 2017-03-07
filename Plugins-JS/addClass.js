'use strict';

    var obj = {

         mouse  : "header #bottombar .cart",
         box    :  ".bodyShadow"

    }

    $(document).ready(function(){


            $(obj.mouse).mouseenter(function(){

                $(obj.box).addClass("active");

            });

           $(obj.mouse).mouseleave(function(){

               $(obj.box).removeClass("active");

           });

    });
