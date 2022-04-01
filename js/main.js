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

			if(headerBurger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				headerBurger.classList.remove('_active');
				headerNav.classList.remove('_active');
			}


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
const headerNav = document.querySelector('.header__nav');
if (headerBurger) {
	headerBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerNav.classList.toggle('_active');
	})
}



//Работа с формой
document.getElementById('form').addEventListener("submit", checkForm);

function checkForm(event) {
	event.preventDefault();
	let el = document.getElementById('form');

	 let name = el.name.value;
	 let tel = el.tel.value;
	 let place = el.place.value;
	 let time = el.time.value;
	 let start = el.start.value;
	 let end = el.end.value;
	 let choose = el.choose.value;

	 let error = "";

	if(name == "" || tel == "" || place == "" || time == "" || start == "" || end == "" || choose == "")
		error = "Fill in all the fields";
	else if(name.length <= 1 || name.length > 30)
		error = "Enter the correct name";
	else if(tel.length <= 8 || tel.length > 16)
		error = "Incorrect number entered";
	else if(place.length <= 1)
		error = "Incorrect address entered";

	if(error != "") {
		document.getElementById('error').innerHTML = error;
	} else {
		alert("The order was placed successfully");
		clearForm();
	}
}

// Сброс данных при отправке формы
function clearForm() {
	let inputs = document.querySelectorAll('.order__input');
	inputs.forEach(input => {
		input.value='';
	})
}