import Todo from "./todo.js";
export function addFilterListeners(){
    document.getElementById("all").addEventListener("click", loadAll);
    document.getElementById("active").addEventListener("click", loadActive);
    document.getElementById("complete").addEventListener("click", loadCompleted);
}

function loadActive() {
    let list = document.querySelectorAll("ul>li:not(:last-child)");
    let item;
    for (item of list) {
        item.remove();
    }
     localStorage.getObj("toDoList").forEach(element => {        
             if(!element.completed) {
                 let todo = new Todo(element.content, element.id, element.completed);
                 todo.addTodo();
             }
     });
 }
 
 function loadCompleted() {
     let list = document.querySelectorAll("ul>li:not(:last-child)");
     let item;
    for (item of list) {
        item.remove();
    }
     localStorage.getObj("toDoList").forEach(element => {        
             if(element.completed) {
                 let todo = new Todo(element.content, element.id, element.completed);
                 todo.addCompletedTodo();
             }
     });
 }
 
 function loadAll() {
     let list = document.querySelectorAll("ul>li:not(:last-child)");
     let item;
    for (item of list) {
        item.remove();
    }
     
     localStorage.getObj("toDoList").forEach(element => {
         let todo = new Todo(element.content, element.id, element.completed);
         
             if(element.completed) {
              todo.addCompletedTodo();
             }
              else {
                 todo.addTodo();
             }
         
     });
 }
 