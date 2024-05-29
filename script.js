const mobileMenu = document.querySelector('.mobile-open');
const navListMobile = document.querySelector('.mobile-menu');

const products = document.querySelector('.prod');
const company = document.querySelector('.comp');
const connect = document.querySelector('.linkup');


const subProd = document.querySelector('.sub-prod');
const subCompany = document.querySelector('.sub-comp');
const subLink = document.querySelector('.sub-link');

const toggleNavMenu = () => {
    navListMobile.classList.toggle('reveal-mobile-nav');
}
mobileMenu.addEventListener('click', toggleNavMenu)


function toggleMobileMenu(buttonSelector, menuSelector) {
    const button = document.querySelector(buttonSelector);
    const menu = document.querySelector(menuSelector);

    button.addEventListener('click', () => {
        menu.classList.toggle('active-sub-menu');
    });
}


toggleMobileMenu('.prod', '.sub-prod');
toggleMobileMenu('.comp', '.sub-comp');
toggleMobileMenu('.linkup', '.sub-link');