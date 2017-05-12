var angle = 0;
function galleryspin(sign) {
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 36; } else { angle = angle - 36; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

$('#carouselHacked').carousel();

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

$('.owl-carousel').owlCarousel({
loop: true,
margin: 10,
nav: true,
navText: [
	"<i class='fa fa-caret-left'></i>",
	"<i class='fa fa-caret-right'></i>"
],
autoplay: true,
autoplayHoverPause: true,
responsive: {
	0: {
		items: 1
	},
	600: {
		items: 3
	},
	1000: {
		items: 5
	}
}
})
