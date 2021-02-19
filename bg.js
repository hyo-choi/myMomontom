const body = document.querySelector("body"),
	bgUrl = [
		"https://images.unsplash.com/photo-1612130679272-4b6a43e93311?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
		"https://images.unsplash.com/photo-1545586860-95d2040c1680?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
		"https://images.unsplash.com/photo-1546417492-0e81e5e9d161?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzAwNTI3fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60"
	]

function makeBackground(num) {
	const image = new Image();
	image.src = bgUrl[num];
	image.classList.add("bgImage");
	body.appendChild(image);
}

function init() {
	const randomNumber = Math.floor(Math.random() * 3);
	makeBackground(randomNumber);
}

init();
