// https://codepen.io/JunaidKhalid-jk/pen/GrbRmr
// Fork from :
// Mediaelement.js HTML5 Video Player
// A PEN BY Junaid Khalid
if (mejs.Features.isiOS) {
  $("select")
    .find('option[value^="rtmp"]')
    .prop("disabled", true)
    .end()
    .find('option[value$="webm"]')
    .prop("disabled", true)
    .end()
    .find('option[value$=".mpd"]')
    .prop("disabled", true)
    .end()
    .find('option[value$=".ogg"]')
    .prop("disabled", true)
    .end()
    .find('option[value*=".flv"]')
    .prop("disabled", true);
}

$("select").change(function () {
  var _this = $(this),
    media = _this.closest("div").prev("div").children("div:first").attr("id");

  mejs.players[media].setSrc(_this.val());
  mejs.players[media].setPoster("");
  mejs.players[media].load();
});

$(document).ready(function () {
  $("video, audio").mediaelementplayer({
    pluginPath: "dist/",
    success: function () {
      $(".player").css("visibility", "visible");
    },
  });
});
