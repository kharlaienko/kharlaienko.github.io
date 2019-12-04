const btnScroll = document.querySelector('.scroll-down');
const hamburger = document.querySelector('.header__burger');
const menuItems = document.querySelector('.menu');
const menu_1 = document.getElementById('menu_1');
const menu_op_1 = document.getElementById('menu_op_1');
const menu_2 = document.getElementById('menu_2');
const menu_op_2 = document.getElementById('menu_op_2');
const menu_3 = document.getElementById('menu_3');
const menu_op_3 = document.getElementById('menu_op_3');
const header = document.querySelector('.header');
const scrollDown = document.querySelector('.scroll-down');
const body = document.querySelector('body');

// SCROLL BTN
if (btnScroll) {
   btnScroll.addEventListener('click', function(event) {
      event.preventDefault();
      const blockId = btnScroll.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}
// BURGER
hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('burger-open');
   header.classList.toggle('header_open');
   menuItems.classList.toggle('menu_open');
   menu_op_1.classList.remove('submenu_open');
   menu_op_3.classList.remove('submenu_open');
   menu_op_2.classList.remove('submenu_open');
   if (body.style.overflow == 'hidden') {
      body.style.overflow = '';
   } else {
      body.style.overflow = 'hidden';
   }
});
menu_1.addEventListener('click', () => {
   menu_op_1.classList.toggle('submenu_open');
   menu_op_2.classList.remove('submenu_open');
   menu_op_3.classList.remove('submenu_open');
});
menu_2.addEventListener('click', () => {
   menu_op_2.classList.toggle('submenu_open');
   menu_op_1.classList.remove('submenu_open');
   menu_op_3.classList.remove('submenu_open');
});
menu_3.addEventListener('click', () => {
   menu_op_3.classList.toggle('submenu_open');
   menu_op_2.classList.remove('submenu_open');
   menu_op_1.classList.remove('submenu_open');
});
