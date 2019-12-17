document.addEventListener('DOMContentLoaded', () => {
   // UI
   const img = document.getElementById('img'),
      grayscale = document.getElementById('grayscale'),
      contrast = document.getElementById('contrast'),
      brightness = document.getElementById('brightness'),
      sepia = document.getElementById('sepia'),
      saturate = document.getElementById('saturate'),
      btnReset = document.getElementById('reset'),
      imgUrl = document.getElementById('img-url');
   // EVENTS
   btnReset.addEventListener('click', resetFilterValue);
   contrast.addEventListener('input', updateFilterValue);
   grayscale.addEventListener('input', updateFilterValue);
   brightness.addEventListener('input', updateFilterValue);
   sepia.addEventListener('input', updateFilterValue);
   saturate.addEventListener('input', updateFilterValue);
   imgUrl.addEventListener('change', changeImg);
   // FILTER VALUES
   const defaults = {
      grayscale: 0,
      contrast: 100,
      brightness: 100,
      sepia: 0,
      saturate: 100
   };

   // FUNCTIONS

   function updateFilterValue() {
      btnReset.disabled = false;
      img.style.filter = `grayscale(${grayscale.value}%) 
         contrast(${contrast.value}%) 
         brightness(${brightness.value}%) 
         sepia(${sepia.value}%) 
         saturate(${saturate.value}%)`;
   }

   function resetFilterValue() {
      btnReset.disabled = true;
      img.style.filter = `grayscale(${(grayscale.value = defaults.grayscale)}%) 
         contrast(${(contrast.value = defaults.contrast)}%) 
         brightness(${(brightness.value = defaults.brightness)}%) 
         sepia(${(sepia.value = defaults.sepia)}%) 
         saturate(${(saturate.value = defaults.saturate)}%)`;
   }

   function changeImg() {
      img.setAttribute('src', imgUrl.value);
   }
});
