//DOM Selectors
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu__nav');
const menuBranding = document.querySelector('.menu--branding');
const links = document.querySelectorAll('.nav__item');

//Initial Menu State
let showMenu = false;
//Eventlisteners
menuBtn.addEventListener('click', toggleMenu);


function toggleMenu () {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        links.forEach(item=>item.classList.add('show'));

        //Reset menu state
        showMenu = true;
    }
    else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        links.forEach(item=>item.classList.remove('show'));

        //Reset menu state
         showMenu = false;
    }
}

