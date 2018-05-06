$(document).ready(function() {
	$('.owl_banner').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		navText: ['', ''],
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})
	$('.owl_d').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		autoplay: true,
		navText: ['', ''],
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})
	$('.index_case_lb').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		autoplay: true,
		navText: ['', ''],
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})
})
$(document).ready(function() {
	jQuery.jqtab = function(tabtit, tab_conbox, shijian) {
		$(tab_conbox).find("li").hide();
		$(tabtit).find("li:first").addClass("thistab").show();
		$(tab_conbox).find("li:first").show();

		$(tabtit).find("li").bind(shijian, function() {
			$(this).addClass("thistab").siblings("li").removeClass("thistab");
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	};
	$.jqtab("#tabs", "#tab_conbox", "mouseenter");
	$.jqtab("#tabs1", "#tab_conbox1", "mouseenter");
});
$(function() {
	$('.slick_banner').slick({
		dots: true,
		autoplay: true,
	});
});
$(function() {
	$('.slick_kehu').slick({
		dots: true,
		autoplay: true,
		vertical: true,
		touchMove: false,
		swipe: false,
	});
});
$(function() {
	$('.owl_news_lb').slick({
		dots: true,
		autoplay: true,
		fade: true,
	});
});

$(function() {
	$('.slick_zoujin').slick({
		dots: false,
		autoplay: true,
		slidesToShow: 5,
		touchMove: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 2
			}
		}]
	});
});
$(function() {
	$('.slick_zizhi').slick({
		dots: true,
		autoplay: true,
		slidesToShow: 4,
	});
});
$(function() {
	$('.slick_kehu_1').slick({
		dots: true,
		autoplay: true,
		slidesToShow: 5,
	});
});
$(document).ready(function() {
	$('.slick_pro').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 5,
		swipe: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}]
	});
});
$(document).ready(function() {
	$(".bigimgpro").slick({
		asNavFor: ".smallimgpro",
	});

	$('.smallimgpro').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.bigimgpro',
		focusOnSelect: true,
	});
});