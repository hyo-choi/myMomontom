const toDoList = document.querySelector(".js-toDoList"),
	toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoClean = document.querySelector(".js-toDoClean");

const TODOS_LS = "toDos",
	toDos = [];

function renewList() {
	location.reload();
}

function cleanToDo() {
	toDos.length = 0;
	saveToDos();
	renewList();
}

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;

	toDoList.removeChild(li);
	toDos.splice(li.id, 1);
	let id = 0;
	toDos.forEach(function (toDoObj) {
		toDoObj.id = id++;
	});
	saveToDos();
	renewList();
}

function saveToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function makeToDo(text, newId) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");

	delBtn.innerText = "❌";
	delBtn.addEventListener("click", deleteToDo);
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
	saveToDos();
}

function addToDoList(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	if (currentValue !== "") {
		makeToDo(currentValue, toDos.length);
	}
	toDoInput.value = "";
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		let id = 0;
		parsedToDos.forEach(function (toDoObj) {
			toDoObj.id = id;
			makeToDo(toDoObj.text, id++);
		});
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener("submit", addToDoList);
	toDoClean.addEventListener("click", cleanToDo);
}

init();
