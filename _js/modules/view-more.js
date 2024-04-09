/*
 *
 * ----------------------------------------------- */
var myCollapsible = document.getElementById("collapse-view-more");
var changeText = document.getElementById("btn-view-more");

myCollapsible.addEventListener("show.bs.collapse", function () {
  changeText.innerHTML = "Close";
});

myCollapsible.addEventListener("hide.bs.collapse", function () {
  changeText.innerHTML = "View more";
});
