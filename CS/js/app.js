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

//ANIMATION

AOS.init({
   // Global settings:
   disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 100, // offset (in px) from the original trigger point
   delay: 300, // values from 0 to 3000, with step 50ms
   duration: 900, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});
