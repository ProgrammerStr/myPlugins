(function ($, w, d, discount) {
	'use strict';

	discount = {
		date     		: new Date(),
		htmlBody 		: 'body, html',
		body 	 		: 'body',

		/* Price - vars */
		oldPrice 		: 'em.valor-de strong',
		newPrice 		: 'em.valor-por strong',
		boxDiscount 	: '.plugin-preco .descricao-preco',
		bankSlipDiscount: '.plugin-preco .bankSlip',

		/* Discount - vars */
		discountPercent	: 'em.discountPercent',

		options : {
			bankSlipDiscount 	: true,
			discountPercent 	: 2
		}

 	};

	discount.Init = function (debug) {
		discount.getDiscount();

	};

	discount.getDiscount = function (e) {
		if ($(discount.newPrice).length > 0) {
			var
				oldPrice = $(discount.oldPrice).text().replace('R$ ', '').replace('.','').replace(',','.'),
				newPrice = $(discount.newPrice).text().replace('R$ ', '').replace('.','').replace(',','.'),
				value,
				discountPercent;

			if (discount.options.bankSlipDiscount) {
				discountPercent = discount.options.discountPercent + 'À VISTA COM DESCONTO <br/>';
			} else {
				value = parseInt(((newPrice * 100) / oldPrice) - 100, 2);
				discountPercent = (-value) + '% OFF'; // minus sign for positive :)

				console.log(discount.value);
			}

			/*console.log('discount >> ', discountPercent);*/

			$(discount.boxDiscount).after('<p class="bankSlip"></p>');
			$(discount.bankSlipDiscount).append('<em class="discountPercent">' + discountPercent + '</em>');

			if (discount.options.bankSlipDiscount) {
				discount.bankSlip(newPrice);
			}

		}
	};

	discount.bankSlip = function (price) {
		var
			discountPercent = parseInt($(discount.discountPercent).html().replace(/\D+/g, ''), 10),
			discountValue 	= (price / 100 * discountPercent).toFixed(2),
			bankSlipPrice 	= discount.realFormat((price - discountValue));

			/*console.log('price -> ', price);
			console.log('discountPercent -> ', discountPercent);
			console.log('discountValue -> ', discountValue);
			console.log('bankSlipPrice -> ', bankSlipPrice);*/

			$(discount.bankSlipDiscount).append('<em class="bankSlipPrice"> R$ ' + bankSlipPrice + '</em>');
	};

	discount.realFormat = function (value) {

        if (value !== '') {

            return parseFloat(value).toFixed(2).toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        }

        return '0,00';
    };

	$(document).ready(function () {
		discount.Init();
	});

}(jQuery, window, document, 'Private'));