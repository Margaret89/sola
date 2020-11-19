import {$} from './common';

// Открыть/Закрыть мобильное меню
$('.js-open-menu').on('click', function(){
	// $('.js-main-nav').addClass('open');
	$('.js-body').addClass('no-scroll open-menu');
});

$('.js-close-menu').on('click', function(){
	// $('.js-main-nav').removeClass('open');
	$('.js-body').removeClass('no-scroll open-menu');
});


// $(window).scroll(function(){
// 	if($(this).scrollTop()>300){
// 		$('.js-move-up').addClass('visible');
// 	}else{
// 		$('.js-move-up').removeClass('visible');
// 	}
// });
// $('.js-move-up').click(function(){$('body,html').animate({scrollTop:0},800);return false;});