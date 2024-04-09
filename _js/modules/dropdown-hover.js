// import { isMobile } from "./isMobile";

import { isMobile } from "./isMobile";

/*
 * collapse animation for navbar dropdown
 * ----------------------------------------------- */
jQuery(function ($) {
  if (isMobile()) {
    $('[data-toggle-touch="collapse"]').on("click", function (e) {
      e.preventDefault();
    });
  } else {
    $('[data-toggle-hover="collapse"]')
      .parent()
      .hover(
        function () {
          var $this = $(this);
          $this.addClass("open").children(".collapse").stop().slideDown(120);

          var timer = setInterval(function () {
            if (
              $this.hasClass("open") &&
              $this.children(".collapse-child").css("display") === "none"
            ) {
              $this.children(".collapse").stop().slideDown(120);
            }

            if ($this.children(".collapse").is(":visible")) {
              clearTimeout(timer);
            }
          }, 100);
        },
        function () {
          var $this = $(this);
          $this.removeClass("open");

          var timer = setInterval(function () {
            if (
              !$this.hasClass("open") &&
              $this.children(".collapse-child").css("display") === "block"
            ) {
              $this.children(".collapse").stop().slideUp(120);
            }

            if ($this.children(".collapse").is(":hidden")) {
              clearTimeout(timer);
            }
          }, 100);
        }
      );
  }
});
