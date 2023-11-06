import Swiper from "../vendor/swiper"

const initSwiperJury = () => {
  if ('[data-swiper="jury"]') {
    new Swiper('[data-swiper="jury"]', {
      loop: true,

      navigation: {
        nextEl: '[data-jury-button="next"]',
        prevEl: '[data-jury-button="prev"]',
      },

      breakpoints: {
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
};

export {initSwiperJury};
