;
(function($, window, document, undefined) {
	var pluginName = 'zlightMenu1',
		defaults = {
			subMenuHeight: '20px',
			fontSize: '13px',
			subMenuWidth: '180px',
			floating: 'left',
			transform: 'on',
			transformBreak: '687',
			lablColor: '#ffffff',
			lablFontSize: '13px',
//			iconColor: '#ffffff',
//			iconSize: '20px',
//			mobileMainColor: '#323231',
//			mainColor: '#323231',
//			secondColor: '#FFB40C',
//			fontColor: '#ffffff',
//			activeFontColor: '#ffffff',
//			borderLightColor: '#444444',
//			borderDarkColor: '#222222',
//			dropBorderLightColor: '#444444',
//			dropBorderDarkColor: '#222222'
		};

	function Zmenu(element, options) {
		this.element = $(element);
		var ele = this;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init(ele)
	};
	Zmenu.prototype.variables = function(ele) {
		this.op = this.options;
		this.mainNav = this.element.children('#zlight-main-nav');
		this.li = this.mainNav.children('li');
		this.links = this.mainNav.children('li').children('a');
		this.allLinks = this.mainNav.find('a');
		this.active = this.mainNav.find('.zlight-active');
		this.subMenu = this.mainNav.find('.zlight-submenu');
		this.subli = this.subMenu.children('li');
		this.subLinks = this.subMenu.children('li').children('a');
		this.mobileNav = this.element.children('#zlight-mobile-nav');
		this.mobileSelect = this.mobileNav.children('select');
		this.mobileSpan = this.mobileNav.children('span');
		this.mobileTxt = this.mobileSpan.text();
		this.mobileIcon = this.mobileNav.children('.zlight-icon');
		this.counter = 0;
		this.mtop = parseInt(this.op.height) * 6
	};
	Zmenu.prototype.setStyles = function(ele) {
		this.element.css({
			'height': this.op.height,
			'line-height': this.op.height,
			'background-color': this.op.mainColor
		});
		this.mainNav.css({
			'border-right-color': this.op.borderDarkColor,
			'float': this.op.floating
		});
		this.links.css({
			'height': this.op.height,
			'line-height': this.op.height,
			'font-size': this.op.fontSize,
			'color': this.op.fontColor,
			'border-left-color': this.op.borderDarkColor,
			'border-right-color': this.op.borderLightColor
		});
		if(this.active) {
			this.active.css('background-color', this.op.secondColor).children('a').css('color', this.op.activeFontColor)
		};
		this.subMenu.css({
			'background-color': this.op.mainColor,
			'width': this.op.subMenuWidth
		});
		this.subLinks.css({
			'color': this.op.fontColor,
			'font-size': this.op.fontSize,
			'border-top-color': this.op.dropBorderDarkColor,
			'border-bottom-color': this.op.dropBorderLightColor,
			'line-height': this.op.subMenuHeight
		});
		this.mobileSelect.fadeTo(0, 0).css({
			'height': this.op.height,
			'line-height': this.op.height
		});
		this.mobileSpan.css({
			'line-height': this.op.height,
			'color': this.op.lablColor,
			'font-size': this.op.lablFontSize
		});
		this.mobileIcon.css({
			'color': this.op.iconColor,
			'line-height': this.op.height,
			'font-size': this.op.iconSize
		});
		this.mobileNav.css('background-color', this.op.mobileMainColor)
	};
	Zmenu.prototype.createMobile = function(ele) {
		this.mobileSelect.append('<option>' + this.mobileTxt + '</option>');
		this.allLinks.each(function(indx, element) {
			var hrf = $(element).attr('href'),
				txt = $(element).text(),
				hclass = $(element).parents('.zlight-submenu').length,
				tr = '';
			if(hclass > 0) {
				for(i = 0; i < hclass; i++) {
					tr += '-'
				}
			};
			ele.mobileSelect.append('<option value="' + hrf + '">' + tr + ' ' + txt + '</option>')
		})
	};
	Zmenu.prototype.change = function(ele) {
		this.mobileSelect.on('change.zmenuChange', function() {
			location = this.options[this.selectedIndex].value
		});
		this.li.add(this.subli).on('mouseenter mouseleave.zmenuEnter', function(event) {
			if(event.type === 'mouseenter') {
				$(this).css('background-color', ele.op.secondColor).children('a').css('color', ele.op.activeFontColor)
			} else if(event.type === 'mouseleave') {
				if($(this).hasClass('zlight-active') === false) {
					$(this).css('background-color', 'transparent').children('a').css('color', ele.op.fontColor)
				}
			}
		});
		if(this.op.transform === 'on') {
			$(window).on('scroll.ZlightScrolling', function() {
				if($(document).scrollTop() >= ele.op.transformBreak && ele.counter === 0) {
					ele.element.css({
						'position': 'fixed',
						'top': '-' + ele.mtop + 'px',
						'left': '0',
						'padding': '0',
						'margin': '0',
						'transition': '0s',
					}).stop(0, 0).animate({
						'top': '0'
					}, 300, 'swing');
					ele.counter = 1
				} else if($(document).scrollTop() < ele.op.transformBreak) {
					ele.element.css({
						'position': 'relative',
						'transition': '0s',
					});
					ele.counter = 0
				}
			})
		}
	};
	Zmenu.prototype.init = function(ele) {
		this.variables(ele);
		this.setStyles(ele);
		this.createMobile(ele);
		this.change(ele)
	};
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if(!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Zmenu(this, options))
			}
		})
	}
})(jQuery, window, document);