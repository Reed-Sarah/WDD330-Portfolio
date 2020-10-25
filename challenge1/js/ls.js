import Todo from "./todo.js";

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

export function initialLoad() {
    localStorage.getObj("toDoList").forEach(element => {
        let todo = new Todo(element.content, element.id, element.completed);
        
            if(element.completed) {
             todo.addCompletedTodo();
            }
             else {
                todo.addTodo();
            }
        toDoList.push(todo);
    });}