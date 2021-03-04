const toDoList = document.querySelector(".js-toDoList"),
	toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoClean = document.querySelector(".js-toDoClean");

const TODOS_LS = "toDos";

let newId,
	toDos = [];

function cleanToDo() {
	if (toDos.length != 0) {
		const toDoLi = toDoList.querySelectorAll("li");
		toDoLi.forEach(function (toDo) {
			toDo.remove();
		});
		toDos = [];
		saveToDos();
	}
}

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter(function (toDo) {
		return toDo.id !== parseInt(li.id);
	});
	toDos = cleanToDos;
	saveToDos();
}

function saveToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function makeToDo(text) {
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
	newId++;
	toDos.push(toDoObj);
	saveToDos();
}

function addToDoList(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	if (currentValue !== "") {
		makeToDo(currentValue);
	}
	toDoInput.value = "";
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function (toDoObj) {
			makeToDo(toDoObj.text);
		});
	}
}

function init() {
	newId = 0;
	loadToDos();
	toDoForm.addEventListener("submit", addToDoList);
	toDoClean.addEventListener("click", cleanToDo);
}

init();
