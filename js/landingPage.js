// Innovative  ProjectsTabs
$(document).ready(function () {
  var $tabs = $(".innovative-projects-tab");
  var $contentTabs = $(".contant-tab");

  $contentTabs.hide().first().show();
  $tabs.first().addClass("active");
  $tabs.click(function () {
    var index = $(this).index();
    $tabs.removeClass("active");
    $(this).addClass("active");

    $contentTabs.hide().eq(index).fadeIn();
  });
});
// Select Path Button
$(document).ready(function () {
  $(".select-path button").on("click", function () {
    var list = $(".list-path-domains");
    if (list.css("display") === "none") {
      list.css("display", "flex");
    } else {
      list.css("display", "none");
    }
  });

  $(".list-path-domains .domain-item").on("click", function () {
    var selectedDomain = $(this).text();
    $(".select-span").text(selectedDomain);
    $(".list-path-domains").css("display", "none");
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".select-path").length) {
      $(".list-path-domains").css("display", "none");
    }
  });
});
