// получение всех слайдов
const slides = document.querySelectorAll('.slide');
// текущий слайд
let currentSlide = 0;
// интервал для автоматического переключения слайдов
let slideInterval = setInterval(nextSlide, 7000);
// все точки
const dots = document.querySelectorAll('.dots__item');

// получение активной точки
function setActiveDot(index) {
dots.forEach((dot, dotIndex) => {
const isActive = dotIndex === index;
dot.classList.toggle('dotActive', isActive);
dot.classList.toggle('dotJunior', isActive && index === 0);
dot.classList.toggle('dotSpecialist', isActive && index === 1);
dot.classList.toggle('dotLeader', isActive && index === 2);
});
}

//активный слайд
function showSlide(slideIndex) {
slides.forEach((slide, index) => {
slide.style.display = slideIndex === index ? 'block' : 'none';
});
currentSlide = slideIndex;
}

// обработчик для точек
dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
setActiveDot(index);
showSlide(index);
});
});

// переключение на предыдущий слайд
function prevSlide() {
clearInterval(slideInterval);
currentSlide--;
if (currentSlide < 0) {
currentSlide = slides.length - 1;
}
showSlide(currentSlide);
setActiveDot(currentSlide);
slideInterval = setInterval(nextSlide, 7000);
}

// переключение на следующий слайд
function nextSlide() {
clearInterval(slideInterval);
currentSlide++;
if (currentSlide >= slides.length) {
currentSlide = 0;
}
showSlide(currentSlide);
setActiveDot(currentSlide);
slideInterval = setInterval(nextSlide, 7000);
}

// обработчики для кнопок переключения
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(0); // первый слайд при открытии сайта
setActiveDot(0); // Устанавливаем активную точку для первого слайда

