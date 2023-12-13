// animate scroll
$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	// $('.mobile-menu').fadeOut();
	return false;
});

// mobile menu
$('.btn-burger').on('click', function () {
	$('.nav-menu').fadeToggle();
});

$('.nav-menu__close').on('click', function () {
	$('.nav-menu').fadeOut();
});

$('.nav-menu__close').on('click', function () {
	$('.nav-menu').fadeOut();
});


// animate css + wow js
new WOW().init();