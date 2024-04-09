// polyfill for IE11 on Swiper js
// Object doesn't support property or method 'isNaN'
Number.isNaN =
  Number.isNaN ||
  function (any) {
    return typeof any === "number" && isNaN(any);
  };
