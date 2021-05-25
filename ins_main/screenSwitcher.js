document.addEventListener("DOMContentLoaded", () => {
	const btnSwitch = document.querySelector('.btn-screen-switch');
	
	const promoScreen = document.querySelector('.promo')
	const quizScreen = document.querySelector('.quiz')
	let listenerAded = false;
	let switchTimeOut;

	const mediaWidth = 960;

	if (window.innerWidth < mediaWidth){
		btnScreenSwitcher();
		return
	}

	window.addEventListener("resize", (event) => {
		if(event.target.innerWidth > mediaWidth){

			if (listenerAded){
				removeBtnScreenSwitcher();
				clearTimeout(switchTimeOut);
			}

			return
		}
		btnScreenSwitcher();
	});

	function removeBtnScreenSwitcher(){
		btnSwitch.removeEventListener('click', addClasesToSwitcher);
	}
	
	function btnScreenSwitcher(){
		listenerAded = true;

		btnSwitch.addEventListener('click', () => {
			addClasesToSwitcher();
		});
	}

	function addClasesToSwitcher(){
		switchTimeOut = setTimeout(() =>{
			promoScreen.classList.toggle('screen_off')
			quizScreen.classList.toggle('screen_on')
		}, 200)
	}
	
});