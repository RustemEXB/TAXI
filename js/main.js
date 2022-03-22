// плавная прокрутка при клике

const menuLinks = document.querySelectorAll('.header__nav-link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}



//БУРГЕР

const headerBurger = document.querySelector('.header__burger');
if (headerBurger) {
	const headerNav = document.querySelector('.header__nav');
	headerBurger.addEventListener("click", function (e) {
		headerBurger.classList.toggle('_active');
		headerNav.classList.toggle('_active');
	})
}


header__nav