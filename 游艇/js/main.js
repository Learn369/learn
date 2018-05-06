$(document).ready(function() {
	$('.owl_a').owlCarousel({
		loop: true,
		margin: 10,
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
	$.jqtab("#tabs", "#tab_conbox", "click");
	$.jqtab("#tabs1", "#tab_conbox1", "mouseenter");
});