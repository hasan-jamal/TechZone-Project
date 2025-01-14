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
  const divCoverBack = document.getElementById("coverBack");

  if (list) {
    const showList = () => list.classList.add("active");
    const showCoverBack = () => divCoverBack.classList.add("coverBack");

    const hideList = () => list.classList.remove("active");
    const hideCoverBack = () => divCoverBack.classList.remove("coverBack");
    boxLink.addEventListener("mouseenter", showList);
    boxLink.addEventListener("mouseenter", showCoverBack);

    boxLink.addEventListener("mouseleave", (event) => {
      hideList();
      hideCoverBack();
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
///////////////////////////////
document.onreadystatechange = function () {
  let lastScrollPosition = 0;
  const header = document.querySelector(".header");
  const imgBtnNavbar = document.querySelector("#btn-navbar img");

  window.addEventListener("scroll", function () {
    lastScrollPosition = window.scrollY;

    if (lastScrollPosition > 50) {
      if (!header.classList.contains("header-fixed")) {
        header.classList.add("header-fixed");
        imgBtnNavbar.src = "./images/circle-header-white.svg";
      }
    } else {
      header.classList.remove("header-fixed");
      imgBtnNavbar.src = "./images/circle-header.png";
    }
  });
};
