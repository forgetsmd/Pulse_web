$(document).ready(function(){
	$('.carousel__inner').slick({
			speed: 1200,
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

	//Modal
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #message').fadeOut();
	})

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn();
	})

	$('.btn_tab').on('click', function() {
		$('.overlay, #order').fadeIn();
	})

	$('.btn_tab').each(function(i){
		$(this).on('click', function(){
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
		})
	})

	// $('.btn_feed').on('click', function() {
	// 	$('#consultation, #order').fadeOut('fast');
	// 	$('.overlay, #message').fadeIn();
	// })
	
	function validateForms(form){
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите свое имя",
				phone: "Пожалуйста, введите свой номер",
				email: {
				  required: "Пожалуйста, введите свою почту",
				  email: "Неправильный адрес почты"
				}
			  }
		});
	}
	validateForms('#order form');
	validateForms('#consultation-form');
	validateForms('#consultation form');
});
