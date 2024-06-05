const mobileMenu = document.querySelector('.mobile-open');
const navListMobile = document.querySelector('.mobile-menu');


function toggleNavMenu() {
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


toggleMobileMenu('.prod', '.sub-prod-1');
toggleMobileMenu('.comp', '.sub-comp');
toggleMobileMenu('.linkup', '.sub-link');

// const toggleProd = ()=>{
//     hiddenProducts.classList.toggle('active-sub-menu')
// }

// products.addEventListener('click', toggleProd)