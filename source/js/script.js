'use strict';

// Слайдер "Акции" .action-slider на service.html

const actionSliders = document.querySelectorAll(".swiper-container.action-slider");

actionSliders.forEach((el) => {
  let myActionSliders = new Swiper(el, {
    slideToClickedSlide: true,
    initialSlide : 1,
    pagination: {
      el: el.querySelector(".swiper-pagination"),
      type: 'bullets',
      clickable: true,
    },
    dynamicBullets: true,
    breakpoints: {
    // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: el.querySelector(".swiper-button-next"),
          prevEl: el.querySelector(".swiper-button-prev"),
        },
      },
      // when window width is >= 480px
      780: {
        // centeredSlides: false,
        centeredSlides: true,
        slidesPerView: 1,
        // spaceBetween: 0,
        spaceBetween: 0,
      },
      // when window width is >= 1680px
      1680: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 78.5,
      }
    }
  })
});
