//Selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);
document.querySelector("ul").addEventListener("click", handleClickDelete);

//Event Handlers
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTodo(input.value);
  input.value = " ";
}

//Not add todo when input is only spaces (use .innerHTML?)
function AddLi(str) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(str));
  li.innerHTML += ' <button onclick="this.parentNode.remove()">-</button>';
  document.getElementById("out").appendChild(li);
}

//Helpers
function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
    <span class="todo-item">${todo}</span>
    `;

  li.classList.add("todo-list-item");
  ul.appendChild(li);
}

//??? For completing items (strike through)
li.onclick = function () {
  var text = li.style.text - decoration.toggle(line - through);
};

//??? For removing items on double click
listDiv.addEventListener("dblclick", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.remove("marked");
  }
});

removeItemButton.addEventListener("click", function (e) {
  var marked = listDiv.querySelectorAll("li.marked");
  for (var li of marked) {
    var ul = li.parentNode;
    ul.removeChild(li);
  }
});
