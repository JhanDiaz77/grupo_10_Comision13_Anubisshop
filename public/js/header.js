let button = document.querySelector('.menu-button');
let menu = document.querySelector('.header_nav-burger');
let closeButton = document.querySelector('.close-nav');

button.addEventListener('click', () => {
    menu.classList.add('active');
})

closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
})

