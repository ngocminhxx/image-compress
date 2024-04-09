/*
 * menu-trigger btn
 * ----------------------------------------------- */
jQuery(function ($) {
  var $menuTrigger = $(".menu-trigger");

  $menuTrigger.on("click", function (e) {
    e.preventDefault();
  });

  $.each($menuTrigger, function (i) {
    var $this = $(this);
    var id = $this.attr("data-target");

    $(id).on("show.bs.collapse hide.bs.collapse", function (e) {
      if ("#" + $(e.target).attr("id") === id) {
        $this.toggleClass("active");
      }
    });
  });
});
