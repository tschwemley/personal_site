$(document).ready(function() {
	$('.nav-toggle').click(function() {

		// Hide/show nav bar
		$('nav').slideToggle();

		// Adjust the absolute position of the nav toggle
		if ($('.nav-toggle').css('top') == '50px') {
			$('.nav-toggle').css('top', '126px');
		} else {
			$('.nav-toggle').css('top', '50px');
		}	
	})
});
