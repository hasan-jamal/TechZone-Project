document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide-portfolio");
  const dots = document.querySelectorAll(".slider-portfolio-dots .dot");
  let currentIndex = 0;

  // Function to show the current slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      const isFirstSlide = slide.classList.contains("first-slide");

      if (i === index) {
        slide.classList.add("active");

        // Apply dramatic effect only to the first slide
        if (isFirstSlide) {
          const image = slide.querySelector(".slide-portfolio-img");
          const text = slide.querySelector(".slide-portfolio-texts");
          image.style.animation = "firstImageAppear 1.5s ease-out forwards";
          text.style.animation = "firstTextAppear 1.5s ease-out forwards";
        }
      } else {
        // Reset animations for other slides
        if (isFirstSlide) {
          const image = slide.querySelector(".slide-portfolio-img");
          const text = slide.querySelector(".slide-portfolio-texts");
          image.style.animation = "none";
          text.style.animation = "none";
        }
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Add "first-slide" class to the first slide
  slides[0].classList.add("first-slide");

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Auto-advance the slider every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);

  // Initialize the first slide
  showSlide(currentIndex);
});
