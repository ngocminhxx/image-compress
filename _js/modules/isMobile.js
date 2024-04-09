/*
 *
 * ----------------------------------------------- */
export function isMobile() {
  var breakpoint = 768;
  var isMobile = false;

  isMobile = updateIsMobile(breakpoint);

  window.addEventListener("DOMContentLoaded", function (event) {
    isMobile = updateIsMobile(breakpoint);
  });

  return isMobile;
}

/*
 *
 * ----------------------------------------------- */
function updateIsMobile(breakpoint) {
  return document.body.clientWidth < breakpoint;
}
