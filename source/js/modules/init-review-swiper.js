import Swiper from "../vendor/swiper"

const initSwiperReview = () => {
  if ('[data-swiper="review"]') {
    new Swiper('[data-swiper="review"]', {
      slidesPerView: 1,
      navigation: {
        nextEl: '[data-review-button="next"]',
        prevEl: '[data-review-button="prev"]',
      },

      loop: true,
    });
  }
};

export {initSwiperReview};
