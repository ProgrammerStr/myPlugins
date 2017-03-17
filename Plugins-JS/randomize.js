// C O D E  B Y - G A B R I E L  P A D U A  |T H & - C # D E - S T R @ N G E|
(function($, win, doc, myVar){
'use strict';

myVar = {

	list          : '.content div',
	randomArray   : [],

};

myVar.init = function() {

	myVar.randomImage();

}; 

myVar.randomImage = function(){

	var ind,
		loop = false,
		ul = $('<ul>'),
		li = null;


	ind = Math.floor(Math.random() * sourceImages.length);
	myVar.randomArray.push(sourceImages[ind]);


	for(var i = 1; i < sourceImages.length; i++){
		ind = Math.floor(Math.random() * sourceImages.length);
		loop = false;

		while(loop != true){

			if(myVar.randomArray.indexOf(sourceImages[ind]) != -1){
			  ind = Math.floor(Math.random() * sourceImages.length);
			} else {
				myVar.randomArray.push(sourceImages[ind]);
				loop = true;
			}

		}
	}


	$(myVar.randomArray).each(function(index, value){

		li = $('<li>');

		li.html('<a>').find('a').attr('href', value.link).html('<img>').find('img').attr({'src' : value.src, 'alt' : value.alt });

		ul.append(li);

	});

	$(myVar.list).html(ul);

};



$(doc).ready(function(){

	myVar.init();

});


}(jQuery, window, document, 'Private'));