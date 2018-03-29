function start() {
	console.log('DOM ready');
	var carouselList = $('#carousel ul');
	setInterval(changeSlides, 1000);
	function changeSlides() {
		carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);
	};
	moveFirstSlide();
};

start();

function moveFirstSlide() {
	var firstItem = carouselList.find('li:first');
	var lastItem = carouselList.find('li:last');
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
};

