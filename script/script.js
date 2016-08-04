$(document).ready(function(){

	/* Anchor Smooth Scroll */
	$('a[href^="#"]').click(function(){

		var target = $(this).attr('href');

		$('html, body').animate({scrollTop: $(target).offset().top}, 500);
		return false;
	});

	/* Slick Slider Initialization */
	$('.video_slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

}); /*-------- Ready End ---------*/