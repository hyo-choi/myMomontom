const greetingForm = document.querySelector(".js-greetingForm"),
	greetingInput = greetingForm.querySelector("input"),
	greeting = document.querySelector(".js-greeting"),
	nameChange = document.querySelector(".js-rename");

const USER_LS = "currentUser",
	SHOWING_CN = "showing";

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function handelSubmit(event) {
	event.preventDefault();
	saveName(greetingInput.value);
	greetingToName(localStorage.getItem(USER_LS));
}

function askForName() {
	greetingForm.classList.add(SHOWING_CN);
	greetingForm.addEventListener("submit", handelSubmit);
}

function greetingToName(text) {
	greetingForm.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello, ${text}`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);

	if (currentUser === null) {
		askForName();
	}
	else {
		greetingToName(currentUser);
	}
}

function deleteName() {
	localStorage.removeItem(USER_LS);
	location.reload();
}

function init() {
	loadName();
	nameChange.addEventListener("click", deleteName);
}

init();
