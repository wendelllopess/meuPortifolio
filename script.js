const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', (event) => {
    event.stopPropagation();
    togglerMenu();
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuHamburguer.contains(event.target)) {
        nav.classList.remove('active');
        menuHamburguer.classList.remove('change');
    }
});

function togglerMenu() {
    menuHamburguer.classList.toggle('change');
    nav.classList.toggle('active');
}
