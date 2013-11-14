(function ($){
	var Sidebar = function ($container, options) {
		this.$container = $container;
		this.$target = this.$container.find('.jsc-side');
		this.$contents = $('#jsi-contents');
		this.$win = $(window);
		this.winWidth = this.$win.width();
		this.winHeight = this.$win.height();
		this.winScrollTop = 0;
		

		this.init();
	};
	Sidebar.prototype = {
		init: function () {
			this.sizing();
			this.btnClicked();
		},
		sizing: function () {
			var self = this;
			
			this.$win.on('load resize orientationchange', function () {
				self.winWidth = self.$win.width();
				self.winHeight = self.$win.height();
				self.$target
					.width(self.winWidth)
					.css('min-height', self.winHeight);
				self.hideSide();
			});
				
			setTimeout(function () {
				self.$target.addClass('transition');
			}, 500);

		},
		btnClicked: function () {
			var self = this,
				$btnOpen = $('.jsc-open-side'),
				$btnClose = $('.jsc-close-side');

			$btnOpen.on('click', function () {
				var $this = $(this);

				self.winScrollTop = self.$win.scrollTop();

				if ( $this.hasClass('jsc-open-left') ) {
					self.openSide($('.jsc-side-left'));
				} else if ( $this.hasClass('jsc-open-right') ) {
					self.openSide($('.jsc-side-right'));
				}
			});

			$btnClose.on('click', function () {
				self.hideSide();
				self.$target.on('webkitTransitionEnd', function () {
					if ($(this).hasClass('hide')) {
						self.$container.height('auto');
						$('html, body').scrollTop(self.winScrollTop);
						self.$contents.css({
							WebkitTransform : 'scale(1, 1)',
							MozTransform : 'scale(1, 1)',
							Transform : 'scale(1, 1)',
							opacity : 1
						});
					}
				});
			});
		},
		openSide: function ($target) {
			$target.css({
				WebkitTransform : 'translateX(0px)',
				MozTransform : 'translateX(0px)',
				Transform : 'translateX(0px)',
			}).removeClass('hide');
			this.$container.height(this.winHeight);
			this.$contents.addClass('transition').css({
				WebkitTransform : 'scale(0.7, 0.7)',
				MozTransform : 'scale(0.7, 0.7)',
				Transform : 'scale(0.7, 0.7)',
				opacity : 0
			});
		},
		hideSide: function () {
			if ( this.$target.hasClass('jsc-side-left') ) {
				this.hideSideLeft($('.jsc-side-left'));
			}
			if ( this.$target.hasClass('jsc-side-right') ) {
				this.hideSideRight($('.jsc-side-right'));
			}
		},
		hideSideLeft: function ($this) {
			var self = this;

			$this.css({
				WebkitTransform : 'translateX(' + -this.winWidth + 'px)',
				MozTransform : 'translateX(' + -this.winWidth + 'px)',
				Transform : 'translateX(' + -this.winWidth + 'px)'
			}).addClass('hide');
			
		},
		hideSideRight: function ($this) {
			var self = this;
			
			$this.css({
				WebkitTransform : 'translateX(' + this.winWidth + 'px)',
				MozTransform : 'translateX(' + this.winWidth + 'px)',
				Transform : 'translateX(' + this.winWidth + 'px)'
			}).addClass('hide');
		}
	};

	$.fn.sidebar = function(options){
        return this.each(function(){
            new Sidebar($(this), options);
        });
    };
})(jQuery);

$(function () {
	$('#jsi-wrapper').sidebar({

	});
});