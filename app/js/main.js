$(function () {

	var mixer = mixitup('.category__gallery');

	const swiper = new Swiper('.swiper', {
		// // Optional parameters
		// direction: 'vertical',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// // And if we need scrollbar
		// scrollbar: {
		// 	el: '.swiper-scrollbar',
		// },
	});

});