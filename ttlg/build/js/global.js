$(document).ready(function() {

	var coverHeight = $(window).height();

	// alert (coverHeight);

	$('#cover').css({'height':((coverHeight))+'px'});
	$('#masthead').css({'height':((coverHeight))+'px'});

	{

		var topOffset = $('body').offset().top;

		//alert ($('.navigation').offset());

		$(window).scroll(function(e) {
			// Detect if content is being scroll offscreen.

			if ( (document.documentElement.scrollTop || document.body.scrollTop) >= ((coverHeight)/2))
			{
				$('.pagination-previous, .pagination-next').css('opacity', 0);
				/* Commented out because it makes scrolling really, really slow
				$('.pagination-previous, .pagination-next').animate({
					opacity: 0
				}, 500);
				*/
			}
			else
				$('.pagination-previous, .pagination-next').css('opacity', 0.7);
				/*
				$('.pagination-previous, .pagination-next').animate({
					opacity: 0.7
				}, 500);
				*/
		});

	}

});

$(window).resize(function() {

	var $coverHeight = $(window).height();

	$('#cover').css({'height':((coverHeight))+'px'});
	$('#masthead').css({'height':((coverHeight))+'px'});

});