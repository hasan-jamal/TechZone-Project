// Dropdown FAQ
$(document).ready(function () {
  $(".fx-title-FAQ").on("click", function () {
    const parent = $(this).closest(".dropdown-FAQ");
    parent.toggleClass("active");
    parent.find(".content").slideToggle(200);
  });
});
