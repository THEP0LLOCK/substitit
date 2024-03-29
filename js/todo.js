const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");



function deleteToDo(){
    console.dir(event);
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "[X]";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);