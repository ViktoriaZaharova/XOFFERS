// $('[name="phone"]').mask('+7 (999) 999-99-99');
// mobile menu
$('.btn-burger').on('click', function () {
	$('.nav-menu').fadeToggle();
});

$('.nav-menu__close').on('click', function () {
	$('.nav-menu').fadeOut();
});