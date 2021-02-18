const form = document.querySelector(".js-form"),
	input = form.querySelector("input"),
	greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
	SHOWING_CN = "showing";

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function handelSubmit(event) {
	event.preventDefault();
	saveName(input.value);
	greetingToName(localStorage.getItem(USER_LS));
}

function askForName() {
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handelSubmit);
}

function greetingToName(text) {
	form.classList.remove(SHOWING_CN);
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

function init() {
	loadName();
}

init();
