import Swiper from '../vendor/swiper';

const initSwiperReview = () => {
  new Swiper('[data-swiper="reviews"]', {
    navigation: {
      nextEl: '[data-reviews-button="next"]',
      prevEl: '[data-reviews-button="prev"]',
    },

    breakpoints: {
      768: {
        allowTouchMove: true,
      },
    },

    slidesPerView: 1,
    spaceBetween: 30,
    // loop: false,
    allowTouchMove: false,
  });
};

export {initSwiperReview};
