const swiper2 = new Swiper("#swiper-container-2", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".swiper-button.next",
    prevEl: ".swiper-button.prev",
  },
});
