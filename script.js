import { getElements } from "./modules.js";

const form = document.querySelector("form");
const input = document.querySelector("form input");

const ul = document.querySelector(".task-list-pending");
form.addEventListener("submit", (e) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const button1 = document.createElement("button");
  e.preventDefault();
  let arr= [];
  let str = input.value.charAt(0).toUpperCase() + input.value.slice(1);
  if (localStorage.length != 0 && getElements("tasks")) {
    arr = getElements("tasks");
    arr.push(str);
  } else {
    console.log(str)
    arr.push(str);
  }

  localStorage.setItem("tasks", JSON.stringify(arr));
  button.setAttribute("id", str);
  button1.setAttribute("id", "edit");
  li.append(document.createTextNode(str), button1, button);
  li.classList.add("li-styling");
  ul.append(li);
  form.reset();
});

function loadElements() {
  getElements("tasks").forEach((e) => {
    const li = document.createElement("li");
    const object = document.createElement("object");
    const button = document.createElement("button");
    const button1 = document.createElement("button");
    button.setAttribute("id", "delete");
    button1.setAttribute("id", "edit");
    li.append(document.createTextNode(e), button1, button);
    li.classList.add("li-styling");
    ul.append(li);
  });
}

window.addEventListener("load", (e) => {
  loadElements();
});
setTimeout(function () {
  const taskElement = document.querySelectorAll(".task-list-pending li");
  console.log(taskElement);
  taskElement.forEach((e) => {
    console.log(e)
    e.addEventListener("click", (event) => {
        // console.log(event.target.id);
        // console.log(event.target.id);
        console.log(event)
        
    });
  });
}, 1000);

// taskElement.addEventListener("click", (e) => {
//   console.log(e);
// });
