// Initialize Swiper
new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  effect: "slide",
  slidesPerView: 3,
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

// GSAP setup
gsap.registerPlugin(Draggable);

Draggable.create(".brand", {
  type: "x,y",
  edgeResistance: 0.65,
  bounds: window,
  inertia: true,
  onPress() {
    gsap.to(this.target, { scale: 1.2, rotate: 45 });
  },
  onRelease() {
    gsap.to(this.target, {
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  },
});
