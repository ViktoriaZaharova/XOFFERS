// animate scroll
$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});

// mobile menu
$('.btn-burger').on('click', function () {
	$('.mobile-menu').addClass('open');
});

$('.mobile-menu__close').on('click', function () {
	$('.mobile-menu').removeClass('open');
});

// header fixed
$(window).scroll(function () {
	if ($(this).scrollTop() > 200) {
		$('.wrapper').addClass('fixed');
	} else {
		$('.wrapper').removeClass('fixed');
	}
});

$(document).ready(function () {
	var block_show = null;

	function scrollTracking() {
		var wt = $(window).scrollTop();
		var wh = $(window).height();
		var et = $('footer').offset().top;
		var eh = $('footer').outerHeight();

		if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
			if (block_show == null || block_show == false) {
				$('.wrapper').addClass('no-fixed');
			}
			block_show = true;
		} else {
			if (block_show == null || block_show == true) {
				$('.wrapper').removeClass('no-fixed');
			}
			block_show = false;
		}
	}

	$(window).scroll(function () {
		scrollTracking();
	});

	$(document).ready(function () {
		scrollTracking();
	});
});

// animate css + wow js
new WOW().init();