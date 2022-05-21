const todoList = document.querySelector(".todoList");
const textForm = document.querySelector("#todoForm");

if (localStorage.getItem(USERNAME) !== null) {
  textForm.classList.remove(HIDDEN);
}

let todos = [];
function saveTodo() {
  localStorage.setItem("KEY", JSON.stringify(todos));
}

function deleteTodo(event) {
  const lis = event.target.parentElement;
  lis.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(lis.id));
  console.log(todos);
  saveTodo();
}

function paintTodo(todoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  li.id = todoObj.id;
  span.innerText = todoObj.text;
  deleteBtn.addEventListener("click", deleteTodo);
  deleteBtn.innerText = "❌";
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  textForm[0].value = "";
}

function handleBtnClick(event) {
  event.preventDefault();
  const todoObj = {
    id: Date.now(),
    text: event.target[0].value,
  };
  todos.push(todoObj);
  paintTodo(todoObj);
  saveTodo();
}
const savedObj = JSON.parse(localStorage.getItem("KEY")); // Array
function savedTodo(todoObj) {
  paintTodo(todoObj);
}
if (localStorage.getItem("KEY") !== null) {
  console.log("hi");
  savedObj.forEach((obj) => todos.push(obj));
  for (let i = 0; i < todos.length; i++) {
    paintTodo(todos[i]);
  }
}
textForm.addEventListener("submit", handleBtnClick);
