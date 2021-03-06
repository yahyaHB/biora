'use strict';

var body = $('body');
var mainSlider = $('#main-slider');
var imageCarousel = $('.img-carousel');
var imageCarouselSize = $('.img-carousel > .item').size();
var partnersCarousel = $('#partners');
var testimonialsCarousel = $('#testimonials');
var topProductsCarousel = $('#top-products-carousel');
var featuredProductsCarousel = $('#featured-products-carousel');
var sidebarProductsCarousel = $('#sidebar-products-carousel');
var hotDealsCarousel = $('#hot-deals-carousel');
var owlCarouselSelector = $('.owl-carousel');
var isotopeContainer = $('.isotope');
var isotopeFiltrable = $('#filtrable a');
var toTop = $('#to-top');
var hover = $('.thumbnail');
var navigation = $('.navigation');
var superfishMenu = $('ul.sf-menu');
var priceSliderRange = $('#slider-range');

jQuery.fn.slideFadeToggle  = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};
jQuery.fn.slideFadeIn  = function(speed, easing, callback) {
    return this.animate({opacity: 'show', height: 'show'}, speed, easing, callback);
};
jQuery.fn.slideFadeOut  = function(speed, easing, callback) {
    return this.animate({opacity: 'hide', height: 'hide'}, speed, easing, callback);
};

jQuery(document).ready(function () {
    $('a[href=#]').click(function (event) {
        event.preventDefault();
    });
    if ($().sticky) {
        $('.header.fixed').sticky({topSpacing:0});
    }
    if ($().superfish) {
        superfishMenu.superfish();
    }
    $('ul.sf-menu a').click(function () {
        body.scrollspy('refresh');
    });
    $('.menu-toggle').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    $('.menu-toggle-close').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    $('.sf-menu a, .scroll-to').click(function () {

        $('.sf-menu a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, {
            duration: 1200,
            easing: 'easeInOutExpo'
        });
        return false;
    });
    if ($().selectpicker) {
        $('.selectpicker').selectpicker();
    }
    if ($().prettyPhoto) {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            toTop.css({bottom: '15px'});
        } else {
            toTop.css({bottom: '-100px'});
        }
    });
    toTop.click(function () {
        $('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });
    hover.hover(
        function () {
            $(this).addClass('hover');
        },
        function () {
            $(this).removeClass('hover');
        }
    );
    if ($().owlCarousel) {
        var owl = $('.owl-carousel');
        owl.on('changed.owl.carousel', function(e) {
            // update prettyPhoto
            if ($().prettyPhoto) {
                $("a[data-gal^='prettyPhoto']").prettyPhoto({
                    theme: 'dark_square'
                });
            }
        });
        if (mainSlider.length) {
            mainSlider.owlCarousel({
                autoplay: false,
                autoplayHoverPause: true,
                loop: true,
                margin: 0,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }
        if (topProductsCarousel.length) {
            topProductsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 5},
                    1280: {items: 6}
                }
            });
        }
        if (featuredProductsCarousel.length) {
            featuredProductsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 2},
                    991: {items: 3},
                    1024: {items: 4}
                }
            });
        }
        if (sidebarProductsCarousel.length) {
            sidebarProductsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }
        if (partnersCarousel.length) {
            partnersCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 5},
                    1280: {items: 6}
                }
            });
        }
        if (testimonialsCarousel.length) {
            testimonialsCarousel.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 0,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1},
                    1280: {items: 1}
                }
            });
        }
        if (imageCarousel.length) {
            imageCarousel.owlCarousel({
                autoplay: false,
                loop: imageCarouselSize > 1 ? true : false,
                margin: 0,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }
    }
    if ($().countdown) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#dealCountdown1').countdown({until: austDay});
        $('#dealCountdown2').countdown({until: austDay});
        $('#dealCountdown3').countdown({until: austDay});
    }

    if ($.ui) {
        if ($(priceSliderRange).length) {
            $(priceSliderRange).slider({
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val(
                "$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1)
            );
        }
    }
    $('.shop-categories .arrow').click(
        function () {

            $(this).parent().parent().find('ul.children').removeClass('active');
            $(this).parent().parent().find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up');
            if ($(this).parent().find('ul.children').is(":visible")) {
            }
            else {
                $(this).find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
                $(this).parent().find('ul.children').addClass('active');
            }
            $(this).parent().parent().find('ul.children').each(function () {
                if (!$(this).hasClass('active')) {
                    $(this).slideFadeOut();
                }
                else {
                    $(this).slideFadeIn();
                }
            });
        }
    );
    $('.shop-categories ul.children').each(function () {
        if (!$(this).hasClass('active')) {
            $(this).hide();
        }
    });
});

jQuery(window).load(function () {
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut(200);
    if ($().isotope) {
        isotopeContainer.isotope({
            itemSelector: '.isotope-item'
        });
        isotopeFiltrable.click(function () {
            var selector = $(this).attr('data-filter');
            isotopeFiltrable.parent().removeClass('current');
            $(this).parent().addClass('current');
            isotopeContainer.isotope({filter: selector});
            return false;
        });
        isotopeContainer.isotope('reLayout');
    }
    if (location.hash != '') {
        var hash = '#' + window.location.hash.substr(1);
        if (hash.length) {
            body.delay(0).animate({
                scrollTop: jQuery(hash).offset().top
            }, {
                duration: 1200,
                easing: "easeInOutExpo"
            });
        }
    }
    if ($().owlCarousel) {
        if (hotDealsCarousel.length) {
            hotDealsCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 30,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }
    }
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
});

jQuery(window).resize(function () {
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
    if ($().isotope) {
        isotopeContainer.isotope('reLayout');
    }
    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
});

jQuery(window).scroll(function () {
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
    if ($().sticky) {
        $('.header.fixed').sticky('update');
    }
});

document.getElementById('addToCartItem', function addToCart() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
})
