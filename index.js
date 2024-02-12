const button = document.getElementById("button");
const input = document.getElementById("input");
const list = document.getElementById("list-container");
function addtask() {
  if (input.value === "") {
    alert("you must add smthng");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
}
list.addEventListener("click", function (e) {
  if (e.target.tagName === "Li") {
    e.target, this.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
