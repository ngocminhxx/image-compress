import { textFluffy } from "./text-fluffy";

/*
 * https://fonts.google.com/specimen/Noto+Sans+JP
 * Thin    100
 * Light   300
 * Regular 400
 * Medium  500
 * Bold    700
 * Black   900
 * ----------------------------------------------- */
window.WebFontConfig = {
  google: {
    families: [
      "Noto+Sans+JP:400,700",
      // 'Noto+Serif+JP:400,700',
    ],
  },
  active: function () {
    sessionStorage.fonts = true;

    textFluffy();
  },
};

/*
 *
 * ----------------------------------------------- */
(function () {
  var wf = document.createElement("script");
  wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
  wf.type = "text/javascript";
  wf.async = true;
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wf, s);
})();
