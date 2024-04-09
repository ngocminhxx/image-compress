/*
 * Fixed position footer
 * ----------------------------------------------- */
jQuery(window).on("load scroll", function () {
  var $anchor = $("footer");

  if (!$anchor.length) {
    return false;
  }

  $(".js-footer").each(function () {
    var windowTop = $(window).scrollTop();

    if (windowTop < 500) {
      $(this).addClass("is-hidden");
    } else {
      $(this).removeClass("is-hidden");
    }
  });
});
