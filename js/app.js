
$(document).ready(function() {
	$('.icon-menu').click(function() {
		$('.menu').animate({ left: "0px"});

		$('body').animate({ left: "285px"});
	});

	$('.icon-close').click(function() {
		$('.menu').animate({ left: "-285px"});

		$('body').animate({ left: "0px"});
	});
});

