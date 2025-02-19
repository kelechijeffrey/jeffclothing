

// Add event listener to search button
document.querySelector(".search-btn").addEventListener("click", function() {
  // Add your search logic here
});

// Add event listener to bag button
document.querySelector(".bag-btn").addEventListener("click", function() {
  // Add your bag logic here
});

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator-btn');

let currentSlide = 0;

carouselItems[currentSlide].classList.add('active');

prevBtn.addEventListener('click', () => {
  carouselItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentSlide].classList.add('active');
  updateIndicators();
});

nextBtn.addEventListener('click', () => {
  carouselItems[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % carouselItems.length;
  carouselItems[currentSlide].classList.add('active');
  updateIndicators();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = index;
    carouselItems[currentSlide].classList.add('active');
    updateIndicators();
  });
});

// function updateIndicators() {
//   indicators.forEach((indicator, index) => {
//     indicator.classList.remove('active');
//     if (index === currentSlide) {
//       indicator.classList.add('active');
//     }
//   });
// }
// JavaScript:

// const navbarToggle = document.getElementById('navbar-toggle');
// const navbarCollapse = document.getElementById('navbar-collapse');

// navbarToggle.addEventListener('click', () => {
// navbarCollapse.classList.toggle('active');
// });a b 
document.getElementById('exploreButton');
function handleClick(){
  console.log('Button clicked!');
}
const hamburger = document.querySelector(".hambuger");
const navMenu = document.querySelector("nav-menu");
hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})