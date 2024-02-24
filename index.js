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
    const buttondelete = document.createElement("button");
    li.appendChild(buttondelete);
    buttondelete.textContent = "delete";
    buttondelete.classList.add("buttondelete");

    buttondelete.addEventListener("click", () => {
      li.remove();
    });
    input.value = "";
    const editbutton = document.createElement("button");
    li.appendChild(editbutton);
    editbutton.textContent = "edit";
    editbutton.classList.add("buttondelete");
    editbutton.addEventListener("click", () => {
      let inputnewvalue = prompt("change the task");
      if (prompt == "") {
        alert("bos task dail ede bilmezsiniz");
      } else {
        const newText = document.createTextNode(inputnewvalue);
        li.replaceChild(newText, li.firstChild);
      }
    });
    const donebutton = document.createElement("button");
    li.appendChild(donebutton);
    donebutton.classList.add("buttondelete");
    donebutton.textContent = "done";
    donebutton.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });
  }
}
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addtask();
  }
});
