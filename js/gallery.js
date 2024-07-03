new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  effect: "slide", // "slide", "fade", "cube", "flip"
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
