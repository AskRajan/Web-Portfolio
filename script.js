const navBar = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
});