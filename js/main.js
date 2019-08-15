$('document').ready(function() {
	$('.menu a').click(function() {
		$('.navigator').animate({right: '0'}, 800);
		return false;
	});
	
	$('.navigator p a').click(function() {
		$('.navigator').animate({right: '-340px'}, 800);
		return true;
	});
});