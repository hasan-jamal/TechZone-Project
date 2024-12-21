// Section Countries Slider
const slider = document.querySelector(".slider-countries");
const slides = document.querySelectorAll(".slider-countries .slide");
const dotsContainer = document.querySelector(".slider-countries-dots");
const dots = document.querySelectorAll(".slider-countries-dots div");

let currentIndex = 0;

// Function to update the active slide and active dot
function updateSlider(index) {
  // Remove active class from all slides and dots
  slides.forEach((slide, i) => {
    slide.style.display = "none";
    dots[i].classList.remove("active");
  });

  slides[index].style.display = "block";
  slides[index].style.opacity = "0";
  slides[index].style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    slides[index].style.opacity = "1";
  }, 50);
  dots[index].classList.add("active");
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlider(currentIndex);
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

updateSlider(currentIndex);

setInterval(nextSlide, 5000);
//End Section Countries Slider
