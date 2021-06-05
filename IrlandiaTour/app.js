document.addEventListener("DOMContentLoaded", function() {
   const orderBtn = document.querySelector('.order-brn');
   const popup = document.querySelector('.popup');
   const popupForm = document.querySelector('.popup__form');
   const popupFormThanks = document.querySelector('.popup-form__thanks');

   orderBtn.addEventListener('click', popupOpen);

   function popupOpen(){
      orderBtn.removeEventListener('click', popupOpen);
      document.body.style.overflow = "hidden"
      popup.style.display = 'flex';
      popup.style.position = 'fixed';


      let animTimeOut = setTimeout(function(){
         popup.classList.add('popup_open');
         popupForm.classList.add('popup__form_open')
         clearTimeout(animTimeOut);

         popup.addEventListener('click', closePopUp);
         popupForm.addEventListener('click', popupFormClick);
      });
   }

   function closePopUp(){
      popup.style.position = 'unset';
      popup.style.display = 'none';
      document.body.style.overflow = "auto"

      popupFormThanks.classList.remove('popup-form__thanks_open');
      popup.classList.remove('popup_open');
      popupFormClose();

      orderBtn.addEventListener('click', popupOpen);
      popupForm.removeEventListener('click', popupFormClick);
   }

   function popupFormClick(event){
      event.stopPropagation();
      event.preventDefault();

      if (event.target.type === 'submit'){
         popupFormThanks.classList.add('popup-form__thanks_open');
         popupFormClose();

         let waitToThanks = setTimeout(function() {
            popupForm.reset();
            closePopUp();
            clearTimeout(waitToThanks);
         }, 1000);
      }
   }

   function popupFormClose(){
      popupForm.classList.remove('popup__form_open');
   }
});