const btnScroll = document.querySelector('.scroll-down');
const hamburger = document.querySelector('.header__burger');
const menuItems = document.querySelector('.menu');
const sliderBtn = document.querySelector('.slider-btn');
const sliderBtnPrev = document.querySelector('.slider-btn_prev');
const menu_1 = document.getElementById('menu_1');
const menu_op_1 = document.getElementById('menu_op_1');
const menu_2 = document.getElementById('menu_2');
const menu_op_2 = document.getElementById('menu_op_2');
const menu_3 = document.getElementById('menu_3');
const menu_op_3 = document.getElementById('menu_op_3');
const header = document.querySelector('.header');
const scrollDown = document.querySelector('.scroll-down');

btnScroll.addEventListener('click', function(event) {
   event.preventDefault();
   const blockId = btnScroll.getAttribute('href');
   document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
});

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('burger-open');
   sliderBtn.classList.toggle('slider__btn_open');
   sliderBtnPrev.classList.toggle('slider__btn_open');
   menuItems.classList.toggle('menu_open');
   header.classList.toggle('header_menu');
   scrollDown.classList.toggle('scroll-down_open');
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
