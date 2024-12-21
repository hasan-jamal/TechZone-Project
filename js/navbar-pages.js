function toggleSidenav() {
  document.body.classList.toggle("sidenav-active");
}
function closeSidenav() {
  document.body.classList.remove();
}
// const interval = setInterval(toggleSidenav, 1500);
document.addEventListener("mousemove", removeInterval);
document.addEventListener("click", removeInterval);

function removeInterval() {
  document.removeEventListener("mousemove", removeInterval);
  document.removeEventListener("click", removeInterval);
}
// //////////////////////////////////////////////////////////////////////////////////////
document.querySelectorAll(".box-link").forEach((boxLink) => {
  const link = boxLink.querySelector(".link");
  const targetId = link.getAttribute("data-target");
  const list = document.getElementById(targetId);

  if (list) {
    const showList = () => list.classList.add("active");

    const hideList = () => list.classList.remove("active");

    boxLink.addEventListener("mouseenter", showList);
    boxLink.addEventListener("mouseleave", (event) => {
      hideList();
    });
  }
});

// //////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $(".slide-target").each(function () {
    const sliderContainer = $(this);
    const slides = sliderContainer.find(".slide-nav");
    const dotsContainer = sliderContainer.siblings(".slide-target-dots");

    function initializeSlider() {
      dotsContainer.empty();

      slides.each(function (index) {
        const dot = $("<div></div>");
        dot.attr("data-index", index);
        if (index === 0) {
          dot.addClass("active");
        }
        dotsContainer.append(dot);
      });
    }

    let currentIndex = 0;
    function showSlide(index) {
      const dots = dotsContainer.children("div");

      slides.removeClass("active").hide();
      dots.removeClass("active");

      slides.eq(index).addClass("active").show();
      dots.eq(index).addClass("active");
    }

    dotsContainer.on("click", "div", function () {
      currentIndex = $(this).index();
      showSlide(currentIndex);
    });

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
    setInterval(nextSlide, 3000);

    initializeSlider();
    showSlide(currentIndex);
  });
});
