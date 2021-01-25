/**
 * Carousel
 */
function carousel() {
    jQuery.fn.exists = function () {
        return jQuery(this).length;
    }
    $(function () {
        if ($('.carousel').exists()) {
            $('.carousel').each(function () {
                var carousel = $(this),
                        carouselList = carousel.find('.carousel-list'),
                        carouselWrap = carousel.find('.carousel-wrap'),
                        carouselItem = carousel.find('.carousel-item'),
                        backButton = carousel.find('.nav-carousel > .left-arrow'),
                        nextButton = carousel.find('.nav-carousel > .right-arrow'),
                        quantityCarouselItem = Math.floor((carousel.width() + 30) / carouselItem.filter(':last').outerWidth(true));
				if (carousel.parent('#blog').length == 1) quantityCarouselItem = Math.floor((carousel.width() - carousel.find('.text').outerWidth(true)) / carouselItem.filter(':last').outerWidth(true));
                carouselWrap.css('left', '0');
                carouselWrap.attr('data-pos', 0);
                
                if (quantityCarouselItem < 1) {
                    quantityCarouselItem = 1;
                }
                carouselList.width((quantityCarouselItem * carouselItem.filter(':last').outerWidth(true)) - 30).css('visibility', 'visible');
            });
        }
    });
}
function carouselAnimate() {
    jQuery.fn.exists = function () {
        return jQuery(this).length;
    }
    $(function () {
        if ($('.carousel').exists()) {
            $('.carousel').each(function () {
                var carousel = $(this),
                        carouselList = carousel.find('.carousel-list'),
                        carouselWrap = carousel.find('.carousel-wrap'),
                        carouselItem = carousel.find('.carousel-item'),
                        backButton = carousel.find('.nav-carousel .left-arrow'),
                        nextButton = carousel.find('.nav-carousel .right-arrow');
                
                nextButton.click(function () {
                    if (!carouselWrap.is(':animated')) {
                        var pos = parseInt(carouselWrap.attr('data-pos')),
                                carouselScroll = carouselWrap.position().left - carouselList.outerWidth() - 20,
                                quantityCarouselItem = Math.floor((carousel.width() + 30) / carouselItem.filter(':last').outerWidth(true));
						if (carousel.parent('#blog').length == 1) quantityCarouselItem = Math.floor((carousel.width() - carousel.find('.text').outerWidth(true)) / carouselItem.filter(':last').outerWidth(true));
						
                        if (quantityCarouselItem < 1) {
                            quantityCarouselItem = 1;
                        }
                        if (pos < carouselItem.length - quantityCarouselItem) {
                            carouselWrap.animate({left: carouselScroll}, 500, function () {
                                carouselWrap.attr('data-pos', pos + quantityCarouselItem);
                            });
                        }
                    }
                });
                
                backButton.click(function () {
                    if (!carouselWrap.is(':animated')) {
                        var pos = parseInt(carouselWrap.attr('data-pos')),
                                carouselScroll = carouselWrap.position().left + carouselList.outerWidth(),
                                quantityCarouselItem = Math.floor((carousel.width() + 30) / carouselItem.filter(':last').outerWidth(true));
						if (carousel.parent('#blog').length == 1) quantityCarouselItem = Math.floor((carousel.width() - carousel.find('.text').outerWidth(true)) / carouselItem.filter(':last').outerWidth(true));
						
                        if (quantityCarouselItem < 1) {
                            quantityCarouselItem = 1;
                        }
                        if (pos > 0) {
                            carouselWrap.animate({left: carouselScroll}, 500, function () {
                                carouselWrap.attr('data-pos', pos - quantityCarouselItem);
                            });
                        }
                    }
                });
            });
        }
    });
}

/**
 * Window ONLOAD
 */
$(window).on('load', function () {
	/**
	 * Carousel
	 */
	carousel();
	carouselAnimate();
    
});

/**
 *  Window READY
 */
$(document).ready(function (e) {
	var nums = [];
	$('#hits .name').each(function () {
		nums.push($(this).height());
	}).height(Math.max.apply(Math, nums));
    
});

/**
 * Window RESIZE
 */
$(window).resize(function (e) {
	var nums = [];
	$('#hits .name').each(function () {
		nums.push($(this).height());
	}).height(Math.max.apply(Math, nums));
	
    /**
     * Carousel
     */
    carousel();
});