import "jquery-smooth-scroll";
import "jquery.easing";

/*
 *
 * ----------------------------------------------- */
jQuery(function ($) {
  $(".page-top").on("click", function (event) {
    $.smoothScroll({
      easing: "swing",
      speed: 400,
    });

    return false;
  });
});
