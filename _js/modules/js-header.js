import { isMobile } from "./isMobile";

/*
 * Fixed position header
 * ----------------------------------------------- */
jQuery(window).on("load scroll", function () {
  if (isMobile()) {
    return false;
  }

  var $jsHeader = $(".js-header");

  $jsHeader.each(function () {
    var scroll = $(window).scrollTop();
    var formOffset = $("#form-title").offset().top;

    if (scroll > 500) {
      $jsHeader.addClass("is-scrolled");
    } else {
      $jsHeader.removeClass("is-scrolled");
    }

    if (scroll > 600) {
      $jsHeader.addClass("is-transition");
    } else {
      $jsHeader.removeClass("is-transition");
    }

    if (formOffset - 400 > scroll && scroll > 700) {
      $jsHeader.addClass("is-show");
    } else {
      $jsHeader.removeClass("is-show");
    }
  });
});
