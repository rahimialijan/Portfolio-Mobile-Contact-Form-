const humburgerIcon = document.querySelector('.humburger');
const arrowDownIcon = document.querySelector('.action-arrow-down');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-menu');

if (humburgerIcon) {
  humburgerIcon.addEventListener('click', () => {
    navMenu.classList.add('active');
  });
}

if (closeIcon) {
  closeIcon.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
}
