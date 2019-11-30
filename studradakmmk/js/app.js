const btnScroll = document.querySelector('.scroll-down');

btnScroll.addEventListener('click', function(event) {
   event.preventDefault();
   const blockId = btnScroll.getAttribute('href');
   document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   });
});
