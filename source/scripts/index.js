document.addEventListener('DOMContentLoaded', () => {

  const nav = document.querySelector('.main-header__nav');
  nav.classList.remove('main-header__nav--nojs');

  const toggleButton = document.querySelector('.main-header__toggle');

  toggleButton.addEventListener('click', () => {
    if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'block';
      toggleButton.classList.add('main-header__toggle--open');
    } else {
      nav.style.display = '';
      toggleButton.classList.remove('main-header__toggle--open');
    }
  });

  const container = document.querySelector('.slider__container');
  const thumb = document.querySelector('.slider__thumb');
  const imageBefore = document.querySelector('.slider__img-before');
  const imageAfter = document.querySelector('.slider__img-after');

  const moveThumb = (clientX) => {
    const containerRect = container.getBoundingClientRect();
    let newX = clientX - containerRect.left;

    if (newX < 0) {
      newX = 0;
    } else if (newX > containerRect.width) {
      newX = containerRect.width;
    }

    const percent = newX / containerRect.width * 100;
    thumb.style.left = `${percent}%`;
    imageBefore.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    imageAfter.style.clipPath = `inset(0 0 0 ${percent}%)`;
  };

  const onMouseMove = (eMouseMove) => moveThumb(eMouseMove.clientX);
  const onTouchMove = (eTouchMove) => moveThumb(eTouchMove.touches[0].clientX);
  const onThumbReleased = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onThumbReleased);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onThumbReleased);
  };

  thumb.addEventListener('mousedown', (eMouseDown) => {
    eMouseDown.preventDefault();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onThumbReleased);
  });

  thumb.addEventListener('touchstart', (eTouchStart) => {
    eTouchStart.preventDefault();
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onThumbReleased);
  });
});
