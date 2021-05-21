document.addEventListener("DOMContentLoaded", () => {
	const btnSwitch = document.querySelector('.btn-screen-switch');
	
	const promoScreen = document.querySelector('.promo')
	const quizScreen = document.querySelector('.quiz')
	let listenerAded = false;

	if (window.innerWidth < 960){
		btnScreenSwitcher();
		return
	}

	window.addEventListener("resize", (event) => {
		if(event.target.innerWidth > 960){

			if (listenerAded){
				removeBtnScreenSwitcher();
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
		promoScreen.classList.toggle('screen_off')
		quizScreen.classList.toggle('screen_on')
	}
	
});