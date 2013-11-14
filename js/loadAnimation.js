(function ($){

	var LoadAnimation = function ($this, options) {
		this.$container = $this;
		this.$win = $(window);
		this.winWidth = this.$win.width();
		this.$locationTrigger =  $(options.locationName);
		this.$submitForm = $(options.submitFormName);
		this.$submitTrigger = $(options.submitName);
		this.inAnimation = options.inAnimation;
		this.inAnimationEffect = options.inAnimationEffect;
		this.outAnimation = options.outAnimation;
		this.outAnimationEffect = options.outAnimationEffect;
		this.animationDuration = options.animationDuration;

		this.init();
	};
	LoadAnimation.prototype = {
		init: function () {
			this.eventTrigger();
		},
		eventTrigger: function () {
			var self = this;

			this.$win.on('load', function () {
				self.inAnimationStart();
			});

			if (
				this.inAnimationEffect  == 'slideLeft'  ||
				this.inAnimationEffect  == 'slideRight' ||
				this.outAnimationEffect == 'slideLeft'  ||
				this.outAnimationStart  == 'slideRight'
			) {
				this.$win.on('load resize', function () {
					self.sizing();
				});
			}
			
			this.$submitTrigger.on('click', function () {
				self.submitClicked($(this));
			});
			this.$locationTrigger.on('click', function (event) {
				event.preventDefault();
				self.locationClicked($(this));
			});
		},
		addContainerStyles: function () {
			this.$container.addClass('transition');
		},
		removeContainerStyles: function () {
			this.$container.removeClass('transition');
		},
		sizing: function () {
			this.winWidth = this.$win.width();
			this.$container.width(this.winWidth);
		},
		inAnimationStart: function () {
			var self = this;
			switch ( this.inAnimationEffect ) {
				case 'fadeIn':
					setTimeout(function () {
						self.addContainerStyles();
						self.inOpacity();
					}, self.animationDuration);
				break;

				case 'scaleFromSmall':
					this.scaleMinSize();
					setTimeout(function () {
						self.addContainerStyles();
						self.scaleDefaultSize();
						self.inOpacity();
					}, self.animationDuration);
				break;

				case 'scaleFromOver':
					this.scaleOverSize();
					setTimeout(function () {
						self.addContainerStyles();
						self.scaleDefaultSize();
						self.inOpacity();
					}, self.animationDuration);
				break;

				case 'slideToLeft':
					this.inOpacity();
					this.translateLeftPosition();
					setTimeout(function () {
						self.addContainerStyles();
						self.translateCenterPosition();
					}, self.animationDuration);
				break;

				case 'slideToRight':
					this.inOpacity();
					this.translateRightPosition();
					setTimeout(function () {
						self.addContainerStyles();
						self.translateCenterPosition();
					}, self.animationDuration);
				break;
			}
		},
		outAnimationStart: function () {
			var self = this;
			switch ( this.outAnimationEffect ) {
				case 'fadeOut':
					this.outOpacity();
				break;

				case 'scaleToSmall':
					this.scaleMinSize();
					this.outOpacity();
				break;

				case 'scaleToOver':
					this.scaleOverSize();
					this.outOpacity();
				break;

				case 'slideToLeft':
					this.translateLeftPosition();
				break;

				case 'slideToRight':
					this.translateRightPosition();
				break;
			}
		},
		inOpacity: function () {
			this.$container.css('opacity', 1);
		},
		outOpacity: function () {
			this.$container.css('opacity', 0);
		},
		scaleDefaultSize: function () {
			this.$container.css({
				WebkitTransform : 'scale(1, 1)',
				MozTransform : 'scale(1, 1)',
				Transform : 'scale(1, 1)',
			});
		},
		scaleMinSize: function () {
			this.$container.css({
				WebkitTransform : 'scale(0.7, 0.7)',
				MozTransform : 'scale(0.7, 0.7)',
				Transform : 'scale(0.7, 0.7)',
			});
		},
		scaleOverSize: function () {
			this.$container.css({
				WebkitTransform : 'scale(1.3, 1.3)',
				MozTransform : 'scale(1.3, 1.3)',
				Transform : 'scale(1.3, 1.3)',
			});
		},
		translateCenterPosition: function () {
			this.$container.css({
				WebkitTransform : 'translateX(0)',
				MozTransform : 'translateX(0)',
				Transform : 'translateX(0)'
			});
		},
		translateLeftPosition: function () {
			this.$container.css({
				WebkitTransform : 'translateX(' + -this.winWidth + 'px)',
				MozTransform : 'translateX(' + -this.winWidth + 'px)',
				Transform : 'translateX(' + -this.winWidth + 'px)'
			});
		},
		translateRightPosition: function () {
			this.$container.css({
				WebkitTransform : 'translateX(' + this.winWidth + 'px)',
				MozTransform : 'translateX(' + this.winWidth + 'px)',
				Transform : 'translateX(' + this.winWidth + 'px)'
			});
		},
		locationClicked: function ($this) {
			var self = this;
				defaultHref = $this.attr('href');

			this.outAnimationStart();

			setTimeout(function () {
				location.href = defaultHref;
			}, self.animationDuration);
			
		},
		submitClicked: function ($this) {
			var self = this;

			this.outAnimationStart();
			setTimeout(function () {
				$this.parents(this.$summitForm).submit();
			}, self.animationDuration);
		}
	};


	$.fn.loadAnimation = function(options){
        return this.each(function(){
            new LoadAnimation($(this), options);
        });
    };

})(jQuery);