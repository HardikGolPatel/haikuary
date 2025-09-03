// JavaScript Document
$(document).ready(function() {

	// Menu 
	$(".navbar-toggler").click(function(){
		$(this).toggleClass("open");		
		$("html").toggleClass("overflow-hidden");
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	});

	// OFI Browser
	objectFitImages(); 
});
