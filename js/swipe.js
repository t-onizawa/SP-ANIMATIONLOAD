(function ($){

    var SpSwipe = function ($container, options) {
        this.$container = $container;
        this.$carousel = this.$container.find('.jsc-carousel');
        this.options = options;

        this.display();
        this.carousel();
    };
    SpSwipe.prototype.display = function () {
        this.$win = $(window);
        this.$list = this.$container.find('ul');
        this.$items = this.$container.find('li');
        this.$itemsLength = this.$items.length;

        this.optionTouchSwipe = this.options.touchSwipe;
        this.optionSwipeButton = this.options.swipeButton;
        this.optionIndicator = this.options.indicator;
        this.optionResize = this.options.resize;

        this.display.init(this);
    };
    SpSwipe.prototype.display.init = function(self) {

        if ( self.optionResize ) {
            self.$win.on('load resize', function () {
                windowWidth = self.display.sizing(self);
            });
        }
        if ( self.optionIndicator ) {
            self.display.addIndicator(self);
        }
       
    };
    SpSwipe.prototype.display.sizing = function (self) {
        self.$windowWidth = self.$win.width();
        self.$carouselWidth = self.$carousel.width();
        self.$carouselHeight = self.$carousel.height();

        self.$list.width(self.$carouselWidth * self.$itemsLength );
        self.$items.width(self.$carouselWidth);
        self.$items.height(self.$carouselHeight);

        return self.$windowWidth;
    };
    SpSwipe.prototype.display.addIndicator = function (self) {
        var $indicatorContainer = $('<ul class="indicator" />'),
            indicators = [];

        for ( var i = 0; i < self.$itemsLength; i++ ) {
            indicators.push('<li><a href="javascript:void(0);"></a></li>');
        }
        $indicatorContainer[0].innerHTML = indicators.join('');
        self.$container.append($indicatorContainer);

        $('.indicator').find('li:first-child').addClass('current');
    };

    SpSwipe.prototype.carousel = function () {
        var $carousel = this.$carousel;

        this.$carousel.swipe(this.swipeOptions);
        this.$carousel.find('.jsc-prev').on('click', function () {
            SpSwipe.prototype.carousel.carouselPrev($carousel);
        });
        this.$carousel.find('.jsc-next').on('click', function () {
            SpSwipe.prototype.carousel.carouselNext($carousel);
        });
    };
    SpSwipe.prototype.swipeOptions = {
        swipeLeft: function () {
            SpSwipe.prototype.carousel.carouselNext(this);
        },
         swipeRight: function () {
            SpSwipe.prototype.carousel.carouselPrev(this);
        },
        threshold: 50
    };
   
    SpSwipe.prototype.carousel.currentIndex = 0;
    SpSwipe.prototype.carousel.defaultIndex = 0;
   
    SpSwipe.prototype.carousel.slide = function ($carousel) {
        var differenceNumber = 0,
            carouselWidth = $carousel.parent().width(),
            $carouselList = $carousel.find('ul'),
            $carouselItems = $carouselList.find('li'),
            carouselItemsLength = $carouselItems.length,
            $indicator = $('.indicator').find('li'),
            $prev = $carousel.find('.jsc-prev'),
            $next = $carousel.find('.jsc-next');

            if ( this.defaultIndex < this.currentIndex && carouselItemsLength > this.currentIndex ) {

                $prev.show();
                if ( carouselItemsLength - 1 === this.currentIndex ) {
                    $next.hide();
                }
                differenceNumber = this.defaultIndex - this.currentIndex;
                $carouselList.css({
                    'left': '+=' + carouselWidth * differenceNumber
                });

            } else if ( this.defaultIndex > this.currentIndex && this.currentIndex >= 0 ) {
                $next.show();
                if ( this.currentIndex === 0 ) {
                    $prev.hide();
                }

                differenceNumber = this.currentIndex - this.defaultIndex;
                $carouselList.css({
                    'left': '-=' + carouselWidth * differenceNumber
                });
            }

            if ( carouselItemsLength <= this.currentIndex ) {
                this.currentIndex--;
            } else if ( this.currentIndex < 0 ) {
                this.currentIndex++;
            }

            $indicator.removeClass('current');
            $indicator.eq(this.currentIndex).addClass('current');
            this.defaultIndex = this.currentIndex;
    };
    SpSwipe.prototype.carousel.carouselNext = function ($carousel) {
        if ( $carousel.is(':animated') ) {
            return;
        }
        this.currentIndex++;
        this.slide($carousel);
    };
     SpSwipe.prototype.carousel.carouselPrev = function ($carousel) {
        if ( $carousel.is(':animated') ) {
            return;
        }
        this.currentIndex--;
        this.slide($carousel);
    };

    $.fn.spSwipe = function(options){
        return this.each(function(){
            new SpSwipe($(this), options);
        });
    };
})(jQuery);


$(function() {
    var $container = $('.jsc-carousel-container');

    $container.spSwipe({
        touchSwipe: 1900,
        swipeButton: false,
        indicator: true,
        resize: true,
    });
});

 

