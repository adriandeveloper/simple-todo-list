"use_strict";

window.onload = function() {

let addButton = document.getElementById('add_todo');
let todo = document.getElementById('input');

function createMe(){
  let todo = document.getElementById('input');
  console.log(todo);
  let list = document.getElementById("list");
  let listItem = document.createElement("li");
  let editButton = document.createElement("button");
  listItem.innerText = todo.value;
  editButton.innerText = "Edit";
  list.append(listItem);
  listItem.append(editButton);
  todo.value = "";

  return createMe;
}
todo.addEventListener("keypress", (ev) => {
  let key = ev.keyCode;
  if (key === 13 && todo.value !== ""){
    createMe();
  }
});

addButton.addEventListener("click", (ev) => {
  console.log("shizz");
  if (todo.value !== "") {
    createMe();
  }
});
};
