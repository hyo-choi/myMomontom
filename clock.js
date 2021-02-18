const clockContainer = document.querySelector(".js-clock"),
	clockTitle = clockContainer.querySelector("h1");

function getTime() {
	const date = new Date();
	const m = date.getMinutes();
	const h = date.getHours();
	const s = date.getSeconds();
	const hour = h < 10 ? `0${h}` : h;
	const min = m < 10 ? `0${m}` : m;
	const sec = s < 10 ? `0${s}` : s;
	clockTitle.innerText = `${hour}:${min}:${sec}`;
	delete date;
}

function init() {
	getTime();
}

init();
setInterval(getTime, 500);
