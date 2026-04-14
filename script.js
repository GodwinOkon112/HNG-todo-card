// Priority → Low / Medium / High
// Status → Pending / In Progress / Done
// Due Date → formatted nicely
// Time Remaining → calculated text


const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");
const todoStatus = document.getElementById("status");
const title = document.querySelector("h2");
const checkBox = document.getElementById("todo-complete");
const due = document.querySelector(".due");

// date function
const dueDate = new Date("2026-04-15");
const diff = dueDate - new Date();
const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
const text =
  days > 1
    ? `Due in ${days} days`
    : days === 1
      ? "Due tomorrow"
      : diff > 0
        ? "Due today"
        : "Overdue";
due.textContent = text;
console.log(days);


function handleDelete() {
  alert("Todo Deleted");
}
function handleEdit() {
  alert(" Todo editing...");
}

function handleStatus(Status, Color) {
  todoStatus.innerText = Status;
  todoStatus.style.color = Color ;
}

function handleTitle(Style) {
  title.style.textDecorationLine = Style;
}

function handleCheckBox(){
    console.log(checkBox.checked)
    if(checkBox.checked){
        handleStatus('Done', 'hsl(212, 86%, 64%)')
        handleTitle("line-through")
    }else{
        handleTitle("none")
       handleStatus("Pending", "hsl(0, 78%, 62%)"); 
    }

}




deleteBtn.addEventListener("click", handleDelete);
editBtn.addEventListener("click", handleEdit);
checkBox.addEventListener("click", handleCheckBox);

