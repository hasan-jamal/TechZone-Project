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
