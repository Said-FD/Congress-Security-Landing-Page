$(document).ready(function(){

	/* Anchor Smooth Scroll */
	$('.menu_main_flex a').click(function(){

		var target = $(this).attr('href');

		$('html, body').animate({scrollTop: $(target).offset().top}, 500);
		return false;
	});

	/* Slick Slider Initialization */
	$('.video_slider').slick({
		dots: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false
			}
		}]
	});

}); /*-------- Ready End ---------*/
