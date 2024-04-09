/*
 * Fixed position footer
 * ----------------------------------------------- */
jQuery(window).on("load scroll", function () {
  var $footer = $("footer");
  var $jsBanner = $(".js-banner");
  var topPosition = $footer.offset().top;
  var windowHeight = $(window).height() / 2;
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 100) {
    $jsBanner.addClass("is-scrolled");
  } else {
    $jsBanner.removeClass("is-scrolled");
  }

  if ($footer.length) {
    if (scrollTop >= topPosition - windowHeight - 500) {
      $jsBanner.removeClass("is-scrolled");
    }
  }
});
