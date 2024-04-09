/*
 *
 * ----------------------------------------------- */
export function textFluffy() {
  $(".text-fluffy").text(function () {
    var str = $(this).text().trim();
    var html = "";

    for (var i = 0; i < str.length; i++) {
      html += "<span>" + str.charAt(i) + "</span>";
    }

    $(this).empty().html(html);
  });

  setTimeout(function () {
    $("#text-fluffy-1").addClass("active");
  }, 100);

  setTimeout(function () {
    $("#text-fluffy-2").addClass("active");
  }, 2400);
}
