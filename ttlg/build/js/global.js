$(document).ready(function() {

	var coverHeight = $(window).height();
	var coverWidth = $(window).width();
	var articleCount = $('.article-container').length;

	// alert (articleCount);
	// alert (coverHeight);

	$('.cover').css({'height':((coverHeight))+'px'});
	$('#content-scroller-wrapper, .article-container').css({width: ((coverWidth))+'px'});
	$('.masthead').css({'height':((coverHeight))+'px'});
	$('#content-scroller').css({'width':((coverWidth)*(articleCount))+'px'});

	/* Scrolling */

	$('#content-scroller-wrapper').serialScroll({
		items:'.article-container',
		prev:'a.pagination-previous',
		next:'a.pagination-next',
		duration:1200,
		force:true,
		stop:true,
		lock:false,
		cycle:true, //don't pull back once you reach the end
		// easing:'easeOutQuart', //use this easing equation for a funny effect
		jump: true //click on the images to scroll to them
	});

	$('#slideshow').serialScroll({
		items:'li',
		prev:'#screen2 a.prev',
		next:'#screen2 a.next',
		offset:-230, //when scrolling to photo, stop 230 before reaching it (from the left)
		start:1, //as we are centering it, start at the 2nd
		duration:1200,
		force:true,
		stop:true,
		lock:false,
		cycle:false, //don't pull back once you reach the end
		jump: true //click on the images to scroll to them
	});
	

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

	$('.cover').css({'height':((coverHeight))+'px'});
	$('.masthead').css({'height':((coverHeight))+'px'});

});