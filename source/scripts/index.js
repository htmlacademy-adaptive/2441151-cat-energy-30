document.addEventListener('DOMContentLoaded', () => {
  // Ваш текущий код для переключения навигации
  const toggleButton = document.querySelector('.main-header__toggle');
  const nav = document.querySelector('.main-nav');

  toggleButton.addEventListener('click', () => {
    if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'block';
      toggleButton.classList.add('main-header__toggle--open');
    } else {
      nav.style.display = 'none';
      toggleButton.classList.remove('main-header__toggle--open');
    }
  });

  // Добавление функциональности слайдера
  const container = document.querySelector('.slider__container');
  const thumb = document.querySelector('.slider__thumb');
  const imageBefore = document.querySelector('.slider__img-before');
  const imageAfter = document.querySelector('.slider__img-after');

  // Функция для обработки перемещения ручки
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

  // Обработчики для мыши
  thumb.addEventListener('mousedown', (eMouseDown) => {
    eMouseDown.preventDefault();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onThumbReleased);
  });

  // Обработчики для сенсорных событий
  thumb.addEventListener('touchstart', (eTouchStart) => {
    eTouchStart.preventDefault();
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onThumbReleased);
  });
});
