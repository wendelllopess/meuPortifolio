const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', (event) => {
    event.stopPropagation();
    togglerMenu();
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuHamburguer.contains(event.target)) {
        nav.style.display = 'none';
        menuHamburguer.classList.remove('change');
    }
});

function togglerMenu() {
    menuHamburguer.classList.toggle('change');
    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}


