const hamburger = document.querySelector('.hamburger'),
   menuItems = document.querySelector('.menu__list'),
   menuLinks = document.querySelectorAll('.menu__item'),
   introScroll = document.querySelector('.intro__scroll'),
   burgerLine = document.querySelectorAll('.line'),
   btnScroll = document.querySelector('.intro__btn');

hamburger.addEventListener('click', () => {
   menuItems.classList.toggle('open');
   hamburger.classList.toggle('hamburger-open');
   introScroll.classList.toggle('intro__scroll-open');
   burgerLine.classList.toggle('open-line');
});

btnScroll.addEventListener('click', function(event) {
   event.preventDefault();
   const blockId = btnScroll.getAttribute('href');
   document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
});
