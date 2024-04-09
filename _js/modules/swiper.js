// MEMO: import this for IE11.
// MEMO: Swiper 5.4.5 works on IE11.
// import Swiper from "../../node_modules/swiper/js/swiper";

// import the latest version
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);

/*
 *
 * ----------------------------------------------- */
var swiperSimple = document.querySelector(".swiper-simple");

if (swiperSimple) {
  new Swiper(swiperSimple, {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

/*
 *
 * ----------------------------------------------- */
var swiperNonstop = document.querySelector(".swiper-nonstop-slide");

if (swiperNonstop) {
  new Swiper(swiperNonstop, {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 25,
    initialSlide: 2,
    loop: true,
    speed: 7500,
    allowTouchMove: false,
    autoplay: {
      enabled: true,
      delay: 1,
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
    },
  });
}
