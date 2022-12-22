const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-input");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos =  toDos.filter((item)=> (item.id).toString()!==li.id);
  saveToDos();
}
function paintToDo(newToDoObj) {
  const list = document.createElement("li");
  list.id= newToDoObj.id;
  const span = document.createElement("span");
  const delteBtn = document.createElement("button");
  delteBtn.innerText = "❌";
  delteBtn.addEventListener("click", deleteToDo);
  list.appendChild(span);
  list.appendChild(delteBtn);
  span.innerText = newToDoObj.text;
  toDoList.appendChild(list);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text:newToDo,
    id :Date.now()
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos= parsedToDos;
  parsedToDos.forEach(toDo => {
    paintToDo(toDo);
  });
}
