// StartSlider 2

$(document).ready(function () {
  $(".slider-competitive-advantage").slick({
    prevArrow: $(".left-competitive"),
    nextArrow: $(".right-competitive"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    responsive: [
      {
        breakpoint: 768, // Mobile landscape and larger
        settings: {
          slidesToShow: 1.05, // Number of slides to show at once
          centerMode: true, // Optional: Keep centering on smaller screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
      {
        breakpoint: 480, // Mobile portrait and smaller
        settings: {
          slidesToShow: 1.05, // Number of slides to show at once
          centerMode: false, // Optional: Turn off centering for small screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
    ],
  });
});
//  End Slider 2
