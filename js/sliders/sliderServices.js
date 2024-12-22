const sliderService = document.querySelector(".slider-services");
const slidesService = document.querySelectorAll(
  ".slider-services .slide-service"
);
const dotsContainerService = document.querySelector(".slider-services-dots");
const dotsService = document.querySelectorAll(".slider-services-dots div");

let currentIndexService = 0;

// Function to update the active slide and active dot
function updateSliderService(index) {
  // Remove active class from all slidesService and dotsService
  slidesService.forEach((slide, i) => {
    slide.style.display = "none";
    dotsService[i].classList.remove("active");
  });

  slidesService[index].style.display = "block";
  slidesService[index].style.opacity = "0";
  slidesService[index].style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    slidesService[index].style.opacity = "1";
  }, 50);
  dotsService[index].classList.add("active");
}

function nextSlideService() {
  currentIndexService++;
  if (currentIndexService >= slidesService.length) {
    currentIndexService = 0;
  }
  updateSliderService(currentIndexService);
}

function goToSlideService(index) {
  currentIndexService = index;
  updateSliderService(currentIndexService);
}

dotsService.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlideService(index));
});

updateSliderService(currentIndexService);

setInterval(nextSlideService, 5000);
//End Section Countries Slider
