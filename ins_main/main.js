document.addEventListener('DOMContentLoaded', () =>{
	const companiesBtn = document.querySelector('.quiz-companies');
	const quizPopUp = document.querySelector('.quiz-popup');
	
	addListenerToPopUp();

	function openCompaniesPopUp(){
		quizPopUp.classList.add('quiz-popup_show');

		let timeoutAnimPopUp = setTimeout(() =>{
			quizPopUp.style.right = "50%";
			clearTimeout(timeoutAnimPopUp);

			quizPopUp.addEventListener('click', companiesPopUpClickHandler);
		}, 100)

	}

	function closeCompaniesPopUp(){
		quizPopUp.style.right = "-1000%";
		let animDelay = 300

		let timeoutAnimPopUp = setTimeout(() =>{
			quizPopUp.classList.remove('quiz-popup_show');
			clearInterval(timeoutAnimPopUp);

			quizPopUp.removeEventListener('click', companiesPopUpClickHandler);
		}, animDelay)
	}

	function companiesPopUpClickHandler(event){
		const popUpBtnClose = quizPopUp.children[1].children[0];
		const popUpLink = quizPopUp.children[1].children[1];

		if (event.target === popUpBtnClose || event.target === popUpLink){
			closeCompaniesPopUp();
			console.log(popUpLink);
			let timeoutClosePopUp = setTimeout( () => {
				addListenerToPopUp();
				clearTimeout(timeoutClosePopUp);
			}, 100);

			return true;
		}
	}

	function addListenerToPopUp(){
		companiesBtn.addEventListener('click', openCompaniesPopUp, {once: true});
	}
});