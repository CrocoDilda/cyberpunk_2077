// Слайдер адаптивен к количеству фоток и их размеру


const slider = document.querySelector('[data-slider]')
const wrapper = document.querySelector('[data-wrapper]')
const battonBack = document.querySelector('[data-back]')

let quantityImage = 1 // переменная счётчик, которая увеличивается до размера массива
wrapper.style.left = '0px' // Задаю стартовое положение обёртки фоток
wrapper.style.width = `${slider.clientWidth * wrapper.children.length}px` // Задаю адаптивный размер обёртке фоток
wrapper.style.transition = '0.6s' // Плавный переход

setInterval(() => {
	wrapper.style.left = `${-slider.clientWidth	* quantityImage}px`
	quantityImage++
	if (quantityImage > wrapper.children.length - 1) {
		quantityImage = 0
	}
	wrapper.style.width = `${slider.clientWidth * wrapper.children.length}px` // Задаю адаптивный размер обёртке фоток. Если вынести её из временной функции, то параметры экрана будут заданы 1 раз, а если сюда, то они будут обновляться каждый раз
}, 3000);
