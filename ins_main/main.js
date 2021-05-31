document.addEventListener('DOMContentLoaded', () =>{
	const companiesBtn = document.querySelector('.quiz-companies');
	let companiesUrl = 'https://www.google.com.ua/'; //Заглушка пока нет страницы с компаниями
	companiesBtn.addEventListener('click', companiesFirstClick, {once: true});

	function companiesFirstClick(){
		companiesBtn.classList.add('quiz-companies_click');

		setTimeout(() => {
			companiesBtn.attributes['href'].value = companiesUrl;
			companiesBtncd .setAttribute('target', '_blank');
		}, 1000);

		companiesBtn.removeEventListener('click', companiesFirstClick)
	}
});