document.onreadystatechange = function () {
  let lastScrollPosition2 = 0;
  const header2 = document.querySelector(".header2");

  window.addEventListener("scroll", function () {
    lastScrollPosition2 = window.scrollY;

    if (lastScrollPosition2 > 50) {
      if (!header2.classList.contains("header-fixed2")) {
        header2.classList.add("header-fixed2");
      }
    } else {
      header2.classList.remove("header-fixed2");
    }
  });
};
