import "waypoints/lib/jquery.waypoints.min.js";

/*
 *
 * ----------------------------------------------- */
jQuery(function ($) {
  $("#section-concept").waypoint({
    handler: function (direction) {
      $(this.element).addClass("active");

      this.destroy();
    },
    offset: "25%",
  });
});

/*
 *
 * ----------------------------------------------- */
jQuery(function ($) {
  var $scrollspy = $("#scrollspy");

  $(".frame-paper").waypoint({
    handler: function (direction) {
      if (direction === "down") {
        $scrollspy.addClass("active");
      } else {
        $scrollspy.removeClass("active");
      }
    },
    offset: 0,
  });

  $("#section-access").waypoint({
    handler: function (direction) {
      if (direction === "down") {
        $scrollspy.removeClass("active");
      } else {
        $scrollspy.addClass("active");
      }
    },
    offset: 0,
  });
});
