document.addEventListener('DOMContentLoaded', () =>{
	const companiesBtn = document.querySelector('.quiz-companies');
	companiesBtn.addEventListener('click', companiesFirstClick, {once: true});

	function companiesFirstClick(){
		companiesBtn.classList.add('quiz-companies_click');

		setTimeout(() => {
			companiesBtn.attributes['href'].value = 'https://www.google.com.ua/'
		}, 1000);
	}
});