let form = document.querySelector("form");
form.onsubmit = handleSubmitForm;

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  let str = input.value.trim();
  if (str.length != 0) addTodo(input.value);
  input.value = "";
}

function handleClickDelete(e) {
  if (this.style.textDecoration == "line-through") {
    this.parentNode.removeChild(this);
  } else {
    this.style.textDecoration = "line-through";
  }
}

function addTodo(str) {
  let todoListUl = document.getElementById("todo-list");
  let li = document.createElement("li");
  let button = document.createElement("button");

  button.appendChild(document.createTextNode(str));
  li.appendChild(button);
  todoListUl.appendChild(li);

  li.onclick = handleClickDelete;
}
