$(function() {
	$('.slick_banner').slick({
		dots: true,
		autoplay: true,
		arrows: false,
	});
});
$(document).ready(function() {
	$('.owl_honor').owlCarousel({
		loop: true,
		margin: 25,
		nav: true,
		autoplay: true,
		navText: ['', ''],
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		items: 1,
	})
})
$(document).ready(function() {
	$('.owl_hot').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		navText: ['', ''],
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		items: 1,
	})
})
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {
			el: this.el,
			multiple: this.multiple
		}, this.dropdown)
	};
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this);
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');
		if(!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
	};
	var accordion = new Accordion($('#accordion'), false);
	var accordion = new Accordion($('#accordion1'), false);
});

$(document).ready(function() {
	$(".bigimgpro").slick({
		asNavFor: ".smallimgpro",
		arrows: false,
		touchMove:false,
		swipe:false,
		autoplay:false,
		fade: true,
	});

	$('.smallimgpro').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.bigimgpro',
		focusOnSelect: true,
		touchMove:false,
		swipe:false,
		autoplay:false,
	});
});