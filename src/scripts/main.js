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

const newsList = document.querySelector('.news');

newsList.addEventListener('click', (event) => {
  if (event.target.closest('.author__hide')) {
    const hiddenElements = event.target.firstElementChild;
    const threeDots = event.target.closest('.author__hide');

    if (threeDots.classList.contains('author__hide_link')) {
      threeDots.style = 'background: none; cursor: default;';
    } else {
      threeDots.style = 'background: none; cursor: default;';
      hiddenElements.style = 'display: flex;';
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
})
