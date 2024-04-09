/*
 * Sync multi tab btn for Bootstrap tab.js
 * --------------------------------------------------- */
jQuery(function ($) {
  $('a[data-toggle="tab"]').on("show.bs.tab", function (e) {
    var $container = $(e.target).parents('[data-target="tab-container"]');

    $container.find(".active").removeClass("active");
    $container
      .find('[data-target="' + $(e.target).data("target") + '"]')
      .parent("li")
      .addClass("active");
  });
});
