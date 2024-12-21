$(document).ready(function () {
  var owl = $(".owl-carousel");

  owl.owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      1600: {
        items: 3,
        margin: 0,
      },
      1400: {
        items: 3,
        margin: 10,
      },
      1300: {
        items: 3,
        margin: 10,
      },
      1150: {
        items: 3,
        margin: 10,
      },
      1024: {
        items: 3,
        margin: 10,
      },
      768: {
        items: 3,
        margin: 10,
      },
      700: {
        items: 1,
        margin: 10,
      },
      480: {
        items: 1, // Show 2 items for slightly larger screens
        margin: 10,
      },
    },
  });

  // Custom navigation
  $(".slider-videos-arrowsLeft").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".slider-videos-arrowsRight").click(function () {
    owl.trigger("next.owl.carousel");
  });

  // Center item opacity handling
  owl.on("changed.owl.carousel", function (event) {
    var items = $(".owl-carousel .owl-item.active");
    items.removeClass("center");
    items.eq(Math.floor(items.length / 2)).addClass("center");
  });

  // Initial center class setup
  var items = $(".owl-carousel .owl-item.active");
  items.eq(Math.floor(items.length / 2)).addClass("center");
});
