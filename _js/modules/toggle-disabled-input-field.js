(function () {
  var attribute = "data-disabled-class-name";
  var selector = "[" + attribute + "]";

  /*
   * Checkbox
   * Radio button
   * ----------------------------------------------- */
  jQuery(function ($) {
    var $checkbox = $(selector + ":checkbox");
    var $radio = $(selector + ":radio");

    // Checkbox & Radio. Set disabled as default status
    $.each([$checkbox, $radio], function (i, val) {
      toggleDisabled(val.get(0), false);
    });

    // Checkbox toggle disabled status
    $checkbox.on("change", function (e) {
      var $this = $(e.currentTarget);
      toggleDisabled(e.currentTarget, $this.prop("checked"));
    });

    // Radio toggle disabled status
    $.each($radio, function (i, val) {
      var name = $(val).attr("name");
      var $name = $("[name='" + name + "']");

      $name.on("change", function (e) {
        var radio = document.querySelectorAll(
          "[name='" + name + "']" + selector
        );

        radio.forEach(function (element) {
          toggleDisabled(element, element.checked);
        });
      });
    });
  });

  /*
   * toggle disabled attr on input field
   * ----------------------------------------------- */
  function toggleDisabled(elem, isDisabled) {
    var inputSelector = elem.getAttribute(attribute);
    var inputs = document.querySelectorAll(inputSelector);

    if (inputs.length) {
      inputs.forEach(function (element) {
        element.disabled = !isDisabled;
      });
    }
  }
})();
