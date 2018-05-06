$(document).ready(function() {
	$('.owl_index_5').owlCarousel({
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
	$('.slick_one').slick({
		dots: true,
		autoplay: true,
		fade: true,
		autoplaySpeed: 4000,
	});
});
$(document).ready(function() {
	$(".bigimgpro1").slick({
		asNavFor: ".smallimgpro1",
		arrows: true,
		touchMove:false,
		swipe:false,
		autoplay:false,
//		infinite:false,
		fade: true,
	});

	$('.smallimgpro1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.bigimgpro1',
		focusOnSelect: true,
		arrows: true,
		touchMove:false,
		swipe:false,
		autoplay:false,
//		infinite:false,
		centerMode: true,
		arrows: true,
	});
});
$(document).ready(function() {
	$(".bigimgpro2").slick({
		asNavFor: ".smallimgpro2",
		arrows: true,
		touchMove:false,
		swipe:false, 
//		infinite:false,
		autoplay:false,
		fade: true,
	});

	$('.smallimgpro2').slick({ 
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.bigimgpro2',
		focusOnSelect: true,
		arrows: true,
		touchMove:false,
		swipe:false,
		autoplay:false,
//		infinite:false,
		centerMode: true,
	});
});
$(document).ready(function() {
	$(".bigimgpro3").slick({
		asNavFor: ".smallimgpro3",
		arrows: true,
		touchMove:false,
		swipe:false,
//		infinite:false,
		autoplay:false,
	});

	$('.smallimgpro3').slick({ 
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.bigimgpro3',
		focusOnSelect: true,
		arrows: true,
		touchMove:false,
		swipe:false,
		autoplay:false,
//		infinite:false,
	});
});