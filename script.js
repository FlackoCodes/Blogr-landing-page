const mobileMenu = document.querySelector('.mobile-open');
const navListMobile = document.querySelector('.mobile-menu')

const toggleNavMenu = () => {
    navListMobile.classList.toggle('reveal-mobile-nav');
}
mobileMenu.addEventListener('click', toggleNavMenu)
