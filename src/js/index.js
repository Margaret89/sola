import {$, Inputmask} from './common';

// Открыть/Закрыть мобильное меню
$('.js-open-menu').on('click', function(){
	$('.js-body').addClass('open-menu');
	
	function noScrollBody() {
		$('.js-body').addClass('no-scroll');
	}
	 setTimeout(noScrollBody, 300);
});

$('.js-close-menu').on('click', function(){
	$('.js-body').removeClass('no-scroll open-menu');
});

// Фиксированное меню
showHeaderScroll('position-fixedmenu', 'header-content-wrap');

function showHeaderScroll(selPos, fixedMenu) {
	var positionSensor = document.getElementById(selPos);

	if (positionSensor) {
		var fixedMenu = document.getElementById(fixedMenu);
		var sensorTopPos = positionSensor.getBoundingClientRect().top;

		var menuHidden = true;
		if (sensorTopPos <= 0) {
			$(fixedMenu).css('top', '-100px');
			$(fixedMenu).animate({ top: '0' }, { duration: 400, easing: 'linear' });
			menuHidden = false;
		}

		$(window).on('scroll', function() {
			sensorTopPos = positionSensor.getBoundingClientRect().top;
			if (sensorTopPos <= 0) {
				if (menuHidden) {
					$(fixedMenu).css('top', '-100px');
					$(fixedMenu).animate({ top: '0' }, { duration: 400, easing: 'linear' });
					menuHidden = false;
				}

				$(fixedMenu).addClass('fixed');
			} else if (sensorTopPos > 0) {
				if (!menuHidden) {
					$(fixedMenu).animate({ top: '0' }, { duration: 0, easing: 'linear' });
					menuHidden = true;
				}

				$(fixedMenu).removeClass('fixed');
			}
		});
	}
}

// Высота шапки для мобильных браузеров
// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// Слайдер процедур
	$('.js-slider-procedure').slick({
		arrows: false,
		dots: true,
	});

// Слайдер работ
	$('.js-work-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
	});

// Слайдер специалистов
	$('.js-team-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		arrows: false,
		dots: true,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					centerPadding: '250px',
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerPadding: '0',
				}
			},
		]
	});

// Маска для телефона 
Inputmask('+7 (999) 999-9999').mask('.js-phone');

// Раскрывающийся блок
if($('.js-unwrap-block').length){
	$('.js-unwrap-block').on('click','.js-unwrap-head',function(event){
		event.preventDefault();
		$(this).parent().toggleClass('opened');
		if($(this).parent().hasClass('opened')){
			$(this).parent().children('.js-unwrap-content').slideDown(400);
		}
		else{
			$(this).parent().children('.js-unwrap-content').slideUp(400);
		}
	});
}

//Галерея с описанием
if($('.js-gallery-info').length){
	$('.js-gallery-info').each(function(){
		$('.js-gallery-info-item:first-child').addClass('active');
		$('.js-gallery-info-thumb-item:first-child').addClass('active');
	});

	$('.js-gallery-info-thumb-item').on('click', function(){
		var curImg = $(this).data('img');

		console.log(curImg);

		$('.js-gallery-info-item').removeClass('active');
		$('.js-gallery-info-thumb-item').removeClass('active');

		$(this).addClass('active');
		$(this).parents('.js-gallery-info').find('[data-img="'+curImg+'"]').addClass('active');
	});
}

// Yandex карта
if ($('.js-map').length) {
	// Иницилизация карты
	ymaps.ready(init);

	function init(){
		var myMap;

		myMap = new ymaps.Map("map", {
			center: [55.702, 37.496],
			zoom: 16,
			controls: []
		});

		var myPlacemark = new ymaps.Placemark([55.70201117492125, 37.4965199128362] , {},
			{ iconLayout: 'default#image',
			iconImageHref: '/assets/img/mark-map.png',
			iconImageSize: [40, 57],
			iconImageOffset: [-20, -57] });

			myMap.geoObjects.add(myPlacemark);
	}
}

// Добавление анимации при скролле до элемента
$(window).on('scroll',function() {
	$('.js-anim').each(function () {
		var elemPos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		var indentTop = $(window).innerHeight()/2 + $(this).innerHeight()/2;
		
		if ((elemPos < topOfWindow+ indentTop) && (!$(this).hasClass('animated'))) {
			$(this).addClass("animated");
		}
	});
});




// $(window).scroll(function(){
// 	if($(this).scrollTop()>300){
// 		$('.js-move-up').addClass('visible');
// 	}else{
// 		$('.js-move-up').removeClass('visible');
// 	}
// });
// $('.js-move-up').click(function(){$('body,html').animate({scrollTop:0},800);return false;});