import {$, Inputmask} from './common';

// Открыть/Закрыть мобильное меню
$('.js-open-menu').on('click', function(){
	$('.js-body').addClass('no-scroll open-menu');
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
			$(fixedMenu).css("top", "-100px");
			$(fixedMenu).animate({ top: "0" }, { duration: 400, easing: "linear" });
			menuHidden = false;
		}

		$(window).on("scroll", function() {
			sensorTopPos = positionSensor.getBoundingClientRect().top;
			if (sensorTopPos <= 0) {
				if (menuHidden) {
					$(fixedMenu).css("top", "-100px");
					$(fixedMenu).animate({ top: "0" }, { duration: 400, easing: "linear" });
					menuHidden = false;
				}

				$(fixedMenu).addClass('fixed');
			} else if (sensorTopPos > 0) {
				if (!menuHidden) {
					$(fixedMenu).animate({ top: "0" }, { duration: 0, easing: "linear" });
					menuHidden = true;
				}

				$(fixedMenu).removeClass('fixed');
			}
		});
	}
}

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
	});

// Маска для телефона 
Inputmask("+7 (999) 999-9999").mask('.js-phone');

// Раскрывающийся блок
$(".js-unwrap-block").on('click','.js-unwrap-head',function(event){
	event.preventDefault();
	$(this).parent().toggleClass("opened");
	if($(this).parent().hasClass("opened")){
		$(this).parent().children(".js-unwrap-content").slideDown(400);
	}
	else{
		$(this).parent().children(".js-unwrap-content").slideUp(400);
	}
});


// $(window).scroll(function(){
// 	if($(this).scrollTop()>300){
// 		$('.js-move-up').addClass('visible');
// 	}else{
// 		$('.js-move-up').removeClass('visible');
// 	}
// });
// $('.js-move-up').click(function(){$('body,html').animate({scrollTop:0},800);return false;});