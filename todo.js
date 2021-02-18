const toDoList = document.querySelector(".js-toDoList"),
	toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input");

const TODOS_LS = "toDos";

function makeToDo(text) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	delBtn.innerText = "❌";
	const span = document.createElement("span");
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	toDoList.appendChild(li);
}

function addToDoList(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	if (currentValue !== "")
		makeToDo(currentValue);
	toDoInput.value = "";
}

function loadToDos() {
	const toDos = localStorage.getItem(TODOS_LS);
	if (toDos !== null) {

	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener("submit", addToDoList);
}

init();
