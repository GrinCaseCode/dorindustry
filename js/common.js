$(document).ready(function() {

		// hide header on scroll
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.header').outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();

		if (Math.abs(lastScrollTop - st) <= delta)
			return;

		if (st > lastScrollTop && st > navbarHeight) {
			$('.header').removeClass('nav-down').addClass('nav-up');
			{
			}
		} else {
			if (st + $(window).height() < $(document).height()) {
				$('.header').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = st;
	}

		//прилипающие меню
	var $menu = $(".header");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
			$menu.removeClass("default").addClass("fixed");
		} else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}

	});

	if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
		$menu.removeClass("default").addClass("fixed");
	} else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

		/*animate*/
	new WOW().init();


//прилипающая кнопка
var $btnTop = $(".btn-top");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $btnTop.hasClass("default") ){
    $btnTop.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $btnTop.hasClass("fixed")) {
    $btnTop.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $btnTop.hasClass("default") ){
    $btnTop.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $btnTop.hasClass("fixed")) {
    $btnTop.removeClass("fixed").addClass("default");
  }



	//кнопка sandwich
	$(".sandwich").click(function() {
		$(this).toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
	});

	//search
	$(".open-search").click(function() {
		$(".search-main input[type='text']").focus();
		if (!$(".search-main").hasClass("active")) {
			$(".search-main").addClass("active");
			$(".open-search").addClass("active");
			$("body").addClass("no-scroll");
		} else {
			$(".search-main").removeClass("active");
			$(".open-search").removeClass("active");
			$("body").removeClass("no-scroll");
		}
	});

		$(".search-main__close").click(function() {
			$(".search-main").removeClass("active");
			$(".open-search").removeClass("active");
			$("body").removeClass("no-scroll");
	});

	//mobile menu

	  $('.tabs-menu li a').on('click', function (e) {
    e.preventDefault();

    var index = $(this).parent().index();
    $('.tabs-menu li').removeClass('active');
    $(this).parent().addClass('active');
    $('.tab-pane-menu').removeClass('active').hide();
    $('.tab-pane-menu').eq(index).addClass('active').fadeIn(200);
  });

  // инициализация (показ первого таба)
  $('.tab-pane-menu').hide();
  $('.tab-pane-menu').eq($('.tabs-menu li.active').index()).show();

	$(".menu__haschild > i").click(function() {
		if ($(this).siblings("ul").is(":hidden")) {
			$(this).siblings("ul").slideDown(200);
			$(this).parent().addClass("active");
		} else {
			$(this).siblings("ul").slideUp(200);
			$(this).parent().removeClass("active");
		}
	});

	$(".btn-menu, .open-search-mobile").click(function() {
		$(".menu-mobile").addClass("active");
		$(".menu-overlay").fadeIn(200);
		$("body").addClass("no-scroll");
	});

	$(".menu-overlay").click(function() {
		$(".menu-mobile").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
	});

	$(".open-search-mobile").click(function() {
		$(".search-mobile input[type='text']").focus();
	});

	//слайдер

	$('.slider-billbord').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		autoplay: true,
  		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
	});

	$('.slider-gallery').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	 $('.image-card').zoom();

	 $(document).on('click', '.item-additional_zoom', function(e) {
		e.preventDefault();
		$('.full-gallery-popup a:first-child').trigger('click');
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	  $(".item-accordion__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-accordion").removeClass("active");
		$(this).parent().siblings(".item-accordion").find(".item-accordion__content").slideUp(200);
	  });

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});

	$(".btn-top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});

