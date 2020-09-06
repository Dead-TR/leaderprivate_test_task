'use strict';

const sliderBox = document.querySelector('.slider');
let slideId = 1;

sliderBox.addEventListener('click', (event) => {
  const sliding = () => {
    const sliderItems = [...document.querySelectorAll('.slider__item')];

    (slideId > 3) && (slideId = 1);
    (slideId < 1) && (slideId = 3);

    for (const item of sliderItems) {
      item.className = `slider__item slider__item_active-${slideId}`
    }
  };

  if (event.target.classList.contains('slider__arrow')) {
    if (event.target.classList.contains('slider__arrow_left')) {
      sliding(--slideId);
    }

    if (event.target.classList.contains('slider__arrow_right')) {
      sliding(++slideId);
    }
  }
});

const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', (event) => {
  const ev = event.target;

  if (ev.classList.contains('dropdown__title')) {
    const dropContent = ev.nextElementSibling;

    dropContent.classList.toggle('dropdown__list_active');

    if (dropContent.classList.contains('dropdown__list_active')) {
      ev.classList.remove('dropdown__title_noactive');
      ev.classList.add('dropdown__title_active');
    } else {
      ev.classList.add('dropdown__title_noactive');
      ev.classList.remove('dropdown__title_active');
    }
  }
});

const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.addEventListener('click', (event) => {
  const ev = event.target.closest('.mobile-menu__options');

  if (ev) {
    const slider = document.querySelector('.header__slider');

    if (ev.classList.contains('mobile-menu__options_rotate')) {
      ev.classList.remove('mobile-menu__options_rotate');
      slider.classList.remove('header__slider_active');
    } else {
      ev.classList.add('mobile-menu__options_rotate');
      slider.classList.add('header__slider_active');
    }
  }
});

(() => {
  if (document.body.offsetWidth <= 830) {
    const dates = document.querySelectorAll('.author__date');

    for (const i of [...dates]) {
      const medium = i.closest('.news-card_medium');
      const small = i.closest('.news-card_small');

      if (small || medium) {
        const oldText = i.innerText;

        i.innerText = oldText.match(/([a-zA-Z]{3}\s\d{2})/g);
      }
    }
  }
})();
