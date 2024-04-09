import "jquery-match-height";

/*
 *
 * ----------------------------------------------- */
jQuery(window).on("load", function (e) {
  $("[data-mh-window-load]").matchHeight({
    // byRow: true,
    property: "min-height",
    // target: null,
    // remove: false
  });
});

/*
 * For nested child elements
 * ----------------------------------------------- */
jQuery(window).on("load", function (e) {
  $(".row").each(function () {
    $(this).find(".nested").matchHeight({
      // byRow: true,
      property: "min-height",
      // target: null,
      // remove: false
    });
  });
});
