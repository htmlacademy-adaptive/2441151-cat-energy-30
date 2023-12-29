/* в этот файл добавляет скрипты*/
document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.querySelector('.main-header__toggle');
  var nav = document.querySelector('.main-nav');

  toggleButton.addEventListener('click', function () {
    if (nav.style.display === 'none' || nav.style.display === '') {
      nav.style.display = 'block';
      toggleButton.classList.add('main-header__toggle--open');
    } else {
      nav.style.display = 'none';
      toggleButton.classList.remove('main-header__toggle--open');
    }
  });
});
