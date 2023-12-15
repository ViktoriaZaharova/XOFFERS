// animate scroll
$(document).ready(function () { //плавный скролл
	$(".go_to").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top,
			headerHeight = $('header').height();

		$('body,html').animate({ scrollTop: top - headerHeight }, 500);
	});
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