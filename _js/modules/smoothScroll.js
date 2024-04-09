import "jquery-smooth-scroll";
import "jquery.easing";
// import { isMobile } from "./isMobile";

/*
 *
 * ----------------------------------------------- */
// (function () {
//   if (typeof $.smoothScroll !== "function") {
//     return false;
//   }

//   var reSmooth = /^#sm-/;
//   var id;

//   $(window).on("load", function () {
//     if (reSmooth.test(location.hash)) {
//       id = "#" + location.hash.replace(reSmooth, "");

//       var offset = isMobile() ? -40 : -30;

//       var $id = $(id);
//       var offsetSm = $id.data("offset-sm");
//       var offsetMd = $id.data("offset-md");

//       if (isMobile() && offsetSm) {
//         offset = offsetSm;
//       } else if (offsetMd) {
//         offset = offsetMd;
//       }

//       $.smoothScroll({
//         scrollTarget: id,
//         offset: offset,
//         easing: "easeInOutCubic",
//       });
//     }
//   });
// })();

/*
 *
 * ----------------------------------------------- */
// jQuery Smooth Scroll - v2.2.0 - 2017-05-05
// https://github.com/kswedberg/jquery-smooth-scroll
jQuery(function ($) {
  $("[data-sm]").smoothScroll({
    offset: -10,
    // beforeScroll: function (e) {
    //   var scrollTarget = e.scrollTarget;

    //   if (scrollTarget === "#form-title") {
    //     if (isMobile()) {
    //       e.offset = -20;
    //     } else {
    //       e.offset = -30;
    //     }
    //   } else if (scrollTarget === "#section-media") {
    //     e.offset = -10;
    //   }
    // },
  });
});
