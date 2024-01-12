const swiper1 = new Swiper("#swiper-container-1", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },

  //   pagination: {
  //     el: ".pagination",
  //     bulletClass: "pagination__button",
  //     bulletActiveClass: "pagination__button--active",
  //   },
  navigation: {
    nextEl: ".slider-button",
    // prevEl: ".slider-button.prev",
  },
});
