const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initSlides);

function initSlides() {
	if (slides.length > 0) {
		slides[slideIndex].classList.add('display-slide');
		intervalId = setInterval(nextSlide, 5000);
	}
}

function showSlides(index) {
	if (index >= slides.length) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = slides.length - 1;
	}
	slides.forEach((slide) => {
		slide.classList.remove('display-slide');
	});
	slides[slideIndex].classList.add('display-slide');
}

function prevSlide() {
	slideIndex--;
	showSlides(slideIndex);
}

function nextSlide() {
	clearInterval(intervalId);
	slideIndex++;
	showSlides(slideIndex);
}
