document.addEventListener('DOMContentLoaded', () => {
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
});
