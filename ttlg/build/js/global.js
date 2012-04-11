$(document).ready(function() {

	/* Set appropriate widths and heights */

	var coverHeight = $(window).height();
	var coverWidth = $(window).width();
	var articleCount = $('.article').length;

	// alert (articleCount);
	// alert (coverHeight);

	// Set the height of the cover equal to the height of viewport
	$('.cover').css({'height':((coverHeight)*.7)+'px'});
	// Set the width of the container that holds the articles and the articles themselves equal to the width of the viewport
	$('#content-scroller-wrapper, .article').css({width: ((coverWidth))+'px'});
	// Set the height of the masthead equal to the height of the viewport so items can be locked to the top and bottom
	$('.masthead').css({'height':((coverHeight))+'px'});
	// Set the width of the scrollable area which contains articles equal to the width of the viewport multiplied by the number of articles
	$('#content-scroller').css({'width':((coverWidth)*(articleCount))+'px'});
	// Set slideshow image width
	$('.slideshow-image').css({'width':((coverWidth))+'px'});
	//$('#article-list').css({'height':((coverHeight))+'px'});

	/* Scrolling */

	$('#content-scroller-wrapper').serialScroll({
		items:'.article',
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

	{
		$(window).resize(function() {

			var coverHeight = $(window).height();
			var coverWidth = $(window).width();
			var articleCount = $('.article').length;

			// Set the height of the cover equal to the height of viewport
			// Changed to accomodate things below cover on homepage
			$('.cover').css({'height':((coverHeight)*.7)+'px'});
			// Set the width of the container that holds the articles and the articles themselves equal to the width of the viewport
			$('#content-scroller-wrapper, .article').css({width: ((coverWidth))+'px'});
			// Set the height of the masthead equal to the height of the viewport so items can be locked to the top and bottom
			$('.masthead').css({'height':((coverHeight))+'px'});
			// Set the width of the scrollable area which contains articles equal to the width of the viewport multiplied by the number of articles
			$('#content-scroller').css({'width':((coverWidth)*(articleCount))+'px'});
			// Set slideshow image width
			$('.slideshow-image').css({'width':((coverWidth))+'px'});
			//$('#article-list').css({'height':((coverHeight))+'px'});

		});
	}

	{

		var topOffset = $('body').offset().top;

		//alert ($('.navigation').offset());

		$(window).scroll(function() {
			// Detect if content is being scroll offscreen.

			if ( (document.documentElement.scrollTop || document.body.scrollTop) >= ((coverHeight)/2))
			{
				$('.pagination-previous, .pagination-next').css('opacity', 0);
				/* Commented out because it needs some kind of thing to stop it from animating a ton
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

  $("#full-frontal > #content-scroller-wrapper").slides({
    preload: false,
    play: 0,
    bigTarget: false,
		effect: 'slide',
		crossfade: true,
		slideSpeed: 500,
		pagination: true,
		generateNextPrev: false,
		generatePagination: true
  });

  /* Switch */

	/*$('#trigger.closed').click ( function () {
		$('#trigger').removeClass('closed').addClass('open');
		$('#table-of-contents').show();
	});*/

	$('#table-of-contents').click ( function () {
			$('#trigger').removeClass('open').addClass('closed');
			$('#table-of-contents').hide();
	});

	$('#trigger').click(function() {
  $('#table-of-contents').slideToggle('slow', function() {
    // Animation complete.
  });
});

	var openNav = function () {
		$('#trigger').removeClass('closed').addClass('open');
		$('#table-of-contents').show();
		isNavOpen = true;
	};

	var closeNav = function () {
		if (window.innerWidth <= MAX_PHONE_WIDTH) {
			$('#trigger').removeClass('open').addClass('closed');
			$('#table-of-contents').hide();
			isNavOpen = false;		
		}
	};

	var toggleNav = function () {
		if (isNavOpen)
			closeNav();
		else
			openNav();
	};

	var setupNavCallbacks = function () {
		$('#trigger').click ( function () {
			alert ('hi');
			toggleNav();
			return false;
		});

		$('nav ul li a').click ( function () {
			closeNav();
		});

		$('html').click ( function () {
			closeNav();			
		});
	}

});