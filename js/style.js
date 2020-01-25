$('.slider_wrap').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive:[
	{
		breakpoint: 721,
      	settings: {
        	arrows: false,
        	centerMode: true,
        	centerPadding: '0px',
        	slidesToShow: 2
		}
		
	},
	{
		breakpoint: 381,
      	settings: {
        	arrows: false,
        	centerMode: true,
        	centerPadding: '0px',
        	slidesToShow: 1
		}
	}

	]
});


$('.burger-wrap').on('click', function(){
	$(this).toggleClass('active-burger')
})

$('.burger-wrap').on('click', function(){
	$('.menu2').addClass('responsive-menu')
})




$('.wrap_cards').on('click', function(e) {
	var target = $(e.target);
	var popup = $('.popup');

	if(target.hasClass('button')) {

		var card = target.parent();

		var title = card.find('.name-card').text();
		var price = card.find('.price').text();
		var desc = card.find('.description').text();

		var titlePopup = popup.find('.title-popup')
		var popupPrice = popup.find('.popup-price')
		var popupDescription = popup.find('.popup-description')

		titlePopup.text(title);
		popupPrice.text(price);
		popupDescription.text(desc);

		popup.addClass('active-popup');
	} 
})


$('.close-popup').on('click', function(){
	$('.popup').removeClass('active-popup');
})