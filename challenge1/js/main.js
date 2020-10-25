
window.toDoList = [];
import Todo from "./todo.js";
import {initialLoad} from "./ls.js";
import {addFilterListeners} from "./filter.js";
import {tasksLeft} from './utilities.js';


document.getElementById("addNewItem").addEventListener("click", addListItem);
addFilterListeners();

function addListItem() {
    let task = document.getElementById("newItem").value;
    if (task == "") {
        alert("You must enter a todo")
    }
    else {
    let l = new Todo(task);
    toDoList.push(l);
    l.addTodo();
    console.log(toDoList)
    localStorage.setObj("toDoList", toDoList);
    document.getElementById("newItem").value = "";
    tasksLeft();
    }
}

tasksLeft();
initialLoad();
