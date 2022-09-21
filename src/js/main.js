$(document).ready(function() {
	$(".header-burger").click(function(event) {
		$(".header-burger, .header-nav, .activebox-content").toggleClass("active");
		$("body").toggleClass("lock");
	});
});

new Swiper ('.swiper', {
	pagination: {
		el: '.swiper-pagination',

		clickable: true,
	}
});
