let offset = 0; // смещение от левого края 
const  sliderLine = document.querySelector('.slider__line'); // к квери слектор записываею класс слайдера

document.querySelector('.slider__next').addEventListener('click', function() {
	offset = offset + 3055;
	sliderLine.style.left = -offset + 'px'; 

console.log(offset);
if (offset == 6110) {
	offset = -3055;
}
})