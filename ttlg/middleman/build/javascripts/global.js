$(document).ready(function() {

	/* Set appropriate widths and heights */

	var coverHeight = $(window).height();
	var coverWidth = $(window).width();
	var articleCount = $('.article').length;
	
	$('#vertical').each(function() {
			var $children = $(this).children(),
					count = $children.size(),
					$item;
			$children.each(function(i) {
					$item = $(this)
							.css({'left':((i + 1)*10)+'%'});
					if (i === 0) {
							$item.addClass('first');
					}
					if (i == count - 1) {
							$item.addClass('last');
					}
			});
	});

	$('#horizontal').each(function() {
			var $children = $(this).children(),
					count = $children.size(),
					$item;
			$children.each(function(i) {
					var coverHeight = $(window).height();
					$item = $(this)
							.css({'top':(((coverHeight)-62)*(i + 1))*.1});
					if (i === 0) {
							$item.addClass('first');
					}
					if (i == count - 1) {
							$item.addClass('last');
					}
			});
	});	

	// alert (articleCount);
	// alert (coverHeight);

	// Set the height of the cover equal to the height of viewport
	// Subtract the height of the #masthead (3.9375em x 16px = 63px)
	$('.cover').css({'height':((coverHeight)-62)+'px'});
	// Set height of covers on homepage
	$('#home .article').css({'height':(((coverHeight)*.7)-62)+'px'});
	// Set the width of the container that holds the articles and the articles themselves equal to the width of the viewport
	$('.content-scroller-wrapper, .article').css({width: ((coverWidth))+'px'});
	// Set the height of the masthead equal to the height of the viewport so items can be locked to the top and bottom
	//$('.masthead').css({'height':((coverHeight))+'px'});
	// Set the width of the scrollable area which contains articles equal to the width of the viewport multiplied by the number of articles
	$('#content-scroller').css({'width':((coverWidth)*(articleCount))+'px'});
	// Set slideshow image width
	$('.slideshow-image').css({'width':((coverWidth))+'px'});
	//$('#article-list').css({'height':((coverHeight))+'px'});

	/* Scrolling */

	// Serial Scroll

	//$('#content-scroller').find('.article').not(':first-child').addClass('hidden');
	$('#content-scroller .article:first-child').addClass('visible');

	$('#articles .content-scroller-wrapper').serialScroll({
		items:'.article',
		prev:'a.pagination-previous',
		next:'a.pagination-next',
		duration:1200,
		force:true,
		stop:true,
		lock:false,
		cycle:true, //don't pull back once you reach the end
		// easing:'easeOutQuart', //use this easing equation for a funny effect
		//jump: true, //click on the images to scroll to them,
		onBefore:function( e, elem, $pane, $items, pos ){
			$('body,html').animate({
				scrollTop: 0
			}, 800);	
			$items.removeClass('visible').addClass('hidden');
			$(elem).removeClass('hidden').addClass('visible');
			//$(this).removeClass('visible').addClass('hidden');
		}
	});




	// Local Scroll

	$.localScroll.defaults.axis = 'x';
	
	// Scroll initially if there's a hash (#something) in the url 
	$.localScroll.hash({
		target: '.content-scroller-wrapper', // Could be a selector or a jQuery object too.
		queue:true,
		duration:1500
	});
	
	/**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
	$('.home-item hgroup').localScroll({
		target: '.content-scroller-wrapper'
	});   

	{
		$(window).resize(function() {

			var coverHeight = $(window).height();
			var coverWidth = $(window).width();
			//var articleCount = $('.article').length;

			// Set the height of the cover equal to the height of viewport
			// Changed to accomodate things below cover on homepage
			$('.cover').css({'height':((coverHeight)-62)+'px'});
			// Set height of covers on homepage
			$('#home .article, .slides_control').css({'height':(((coverHeight)*.7)-62)+'px'});			
			// Set the width of the container that holds the articles and the articles themselves equal to the width of the viewport
			$('.content-scroller-wrapper, .article').css({width: ((coverWidth))+'px'});
			// Set the height of the masthead equal to the height of the viewport so items can be locked to the top and bottom
			//$('.masthead').css({'height':((coverHeight))+'px'});
			// Set the width of the scrollable area which contains articles equal to the width of the viewport multiplied by the number of articles
			$('#content-scroller').css({'width':((coverWidth)*(articleCount))+'px'});
			// Set slideshow image width
			$('.slideshow-image').css({'width':((coverWidth))+'px'});
			//$('#article-list').css({'height':((coverHeight))+'px'});

			$('#vertical').each(function() {
					var $children = $(this).children(),
							count = $children.size(),
							$item;
					$children.each(function(i) {
							$item = $(this)
									.css({'left':((i + 1)*10)+'%'});
							if (i === 0) {
									$item.addClass('first');
							}
							if (i == count - 1) {
									$item.addClass('last');
							}
					});
			});

			$('#horizontal').each(function() {
					var $children = $(this).children(),
							count = $children.size(),
							$item;
					$children.each(function(i) {
							var coverHeight = $(window).height();
							$item = $(this)
									.css({'top':(((coverHeight)-62)*(i + 1))*.1});
							if (i === 0) {
									$item.addClass('first');
							}
							if (i == count - 1) {
									$item.addClass('last');
							}
					});
			});	
			

		});
	}

	{

		var topOffset = $('body').offset().top;

		//alert ($('.navigation').offset());

		$(window).scroll(function() {
			// Detect if content is being scroll offscreen.

			if ( (document.documentElement.scrollTop || document.body.scrollTop) >= ((coverHeight)/2))
			{
			}
			else
				$('.pagination-previous, .pagination-next').css('opacity', 0.7);
		});

	}

	$("#home > .content-scroller-wrapper").slides({
		preload: false,
		play: 5000,
		bigTarget: false,
		effect: 'slide',
		crossfade: true,
		slideSpeed: 500,
		pagination: true,
		generateNextPrev: false,
		generatePagination: true
	});

	/* Movement Tests */

/*
	$('#home .content-scroller a').click(function() {
		$('body').removeClass('home').addClass('articles');
		$('#home').slideUp('slow').fadeOut('slow',
			function() {
				$('#articles').fadeIn('slow');
				// Removing #home from DOM lets localscroll work by not creating an ID conflict with articles (previously they were both in the featured area in #home and within #articles as themselves)
				$('#home').remove();
		});
	});
*/

	$('#home .content-scroller a, .home-item').click(function() {
		$('body').removeClass('home').addClass('articles');
		$('#home').slideUp('slow').fadeOut('slow',
			function() {
				$('#articles').load('articles.html',
					function() {

						var articleCount = $('.article').length;				
						//alert (articleCount);

						// Set the height of the cover equal to the height of viewport
						// Changed to accomodate things below cover on homepage
						$('.cover').css({'height':((coverHeight)-62)+'px'});
					
						// Set the width of the container that holds the articles and the articles themselves equal to the width of the viewport
						$('.content-scroller-wrapper, .article').css({width: ((coverWidth))+'px'});

						// Set the width of the scrollable area which contains articles equal to the width of the viewport multiplied by the number of articles
						$('#content-scroller').css({'width':((coverWidth)*(articleCount))+'px'});

						// Having to call this again for some reason after load();

						$('#content-scroller').find('.article').not(':first-child').addClass('hidden');
						$('#content-scroller .article:first-child').addClass('visible');


						$('#articles .content-scroller-wrapper').serialScroll({
							items:'.article',
							prev:'a.pagination-previous',
							next:'a.pagination-next',
							duration:1200,
							force:true,
							stop:true,
							lock:false,
							cycle:true, //don't pull back once you reach the end
							// easing:'easeOutQuart', //use this easing equation for a funny effect
							//jump: true, //click on the images to scroll to them,
						});
						$('#vertical').each(function() {
								var $children = $(this).children(),
										count = $children.size(),
										$item;
								$children.each(function(i) {
										$item = $(this)
												.css({'left':((i + 1)*10)+'%'});
										if (i === 0) {
												$item.addClass('first');
										}
										if (i == count - 1) {
												$item.addClass('last');
										}
								});
						});

						$('#horizontal').each(function() {
								var $children = $(this).children(),
										count = $children.size(),
										$item;
								$children.each(function(i) {
										var coverHeight = $(window).height();
										$item = $(this)
												.css({'top':(((coverHeight)-62)*(i + 1))*.1});
										if (i === 0) {
												$item.addClass('first');
										}
										if (i == count - 1) {
												$item.addClass('last');
										}
								});
						});							

					});
				// Removing #home from DOM lets localscroll work by not creating an ID conflict with articles (previously they were both in the featured area in #home and within #articles as themselves)
				$('#home').remove();
		});
	});

	$('#events a').click(function() { 	
		$('body').removeClass('home').addClass('articles');
		$('#home').slideUp('slow').fadeOut('slow',
			function() {
				$('#articles').load('articles.html');
				
				var articleCount = $('.article').length;				

				$('#content-scroller').css({'width':((coverWidth)*(articleCount))+'px'});


				// Removing #home from DOM lets localscroll work by not creating an ID conflict with articles (previously they were both in the featured area in #home and within #articles as themselves)
				$('#home').remove();
		});
		// Not working !!!
		$(this).localScroll({
			target: '.content-scroller-wrapper'
		}); 
	});


	/* Switch */

	/*$('#trigger.closed').click ( function () {
		$('#trigger').removeClass('closed').addClass('open');
		$('#table-of-contents').show();
	});*/

	$('#trigger, #close, .home-item').click(function() {
		$('#table-of-contents').slideToggle('slow', function() {
			$('#curtain').hide();
		});
		$('#home, #articles').fadeToggle('fast');		
	});



});
