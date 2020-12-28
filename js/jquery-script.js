$('header').append('<button class="btn-burger fas fa-bars" type="button"></button>');
$('body').append('<div class="main-menu-fond"></div>');
// injecter main-menu-fond avant le premier élément ou le dernier élément de la balise BODY
$('.btn-burger').click(function(){
	if( $(this).hasClass('fa-times') ){
		$(this).addClass('fa-bars').removeClass('fa-times');
		$('.main-menu,.main-menu-fond').animate({'left':'-100%'},{duration:'fast'});
	}else{
		$(this).addClass('fa-times').removeClass('fa-bars');
		$('.main-menu,.main-menu-fond').animate({'left':0},{duration:'fast'});
	}
});
