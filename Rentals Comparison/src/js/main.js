jQuery(document).ready(function(){
	$('.cd-single-item').each(function(){
		var actual = $(this),
			addToCartBtn = actual.find('.add-to-cart');

		addToCartBtn.on('click', function() {	
			addToCartBtn.addClass('anim').prop('disabled', true);	
			updateCart();
		});
	});
	
	function updateCart() {
		var cart = $('.cd-cart'),
			span = $('.cd-cart > span');
		//show cart if this is the first item added to the cart
		if( !cart.hasClass('items-added') ) {
			cart.addClass('items-added'); 
		}
		else{
			var value = parseInt(span.text())+1;
			span.addClass('added-more').animate({
				//additional animation can be added here	
			}, 750, function(){
				span.text(value);
				setTimeout(function(){
					span.removeClass('added-more')
				}, 750);
			});	
		}
	}
});