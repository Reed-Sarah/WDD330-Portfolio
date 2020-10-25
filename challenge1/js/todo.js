import {removeFromList, completeOnList} from "./utilities.js"
export default class Todo {
   
    constructor(task, id=Date.now(), completed=false) {
        this.content = task;
        this.id = id;
        this.completed = completed;   
    }

    addTodo() {
        let passId = this.id;
        let listItem = document.createElement("li");
        listItem.addEventListener('click', this.completeTodo)
        listItem.addEventListener('click', function(){  
            completeOnList(passId);
        }, false);
        listItem.setAttribute("class", "item");
        let checkbox = document.createElement("div");
        checkbox.setAttribute("class", "checkbox");
        let check = document.createElement("div");
        let taskBox = document.createElement("div");
        taskBox.setAttribute("class", "task");
        taskBox.innerHTML = this.content;
        let x = document.createElement("div");
        x.innerHTML = "\u00D7";
        x.setAttribute("class", "remove");
        x.addEventListener('click', this.removeTodo);
        x.addEventListener('click', function(){  
            removeFromList(passId);
        }, false);
        
        checkbox.appendChild(check)
        listItem.appendChild(checkbox);
        listItem.appendChild(taskBox);
        listItem.appendChild(x);
        let filter =  document.getElementById("filter");
        document.getElementById("list").insertBefore(listItem, filter);
        
    }

    addCompletedTodo() {
        let passId = this.id;
        let listItem = document.createElement("li");
        listItem.addEventListener('click', this.completeTodo)
        listItem.addEventListener('click', function(){  
            completeOnList(passId);
        }, false);
        listItem.setAttribute("class", "item");
        let checkbox = document.createElement("div");
        checkbox.classList.add("checkbox")
        let check = document.createElement("div");
        check.classList.add("checked")
        let taskBox = document.createElement("div");
        taskBox.classList.add("task", "cross") 
        taskBox.innerHTML = this.content;
        let x = document.createElement("div");
        x.innerHTML = "\u00D7";
        x.setAttribute("class", "remove");
        x.addEventListener('click', this.removeTodo);
        x.addEventListener('click', function(){  
            removeFromList(passId);
        }, false);
        
        checkbox.appendChild(check)
        listItem.appendChild(checkbox);
        listItem.appendChild(taskBox);
        listItem.appendChild(x);
        let filter =  document.getElementById("filter");
        document.getElementById("list").insertBefore(listItem, filter);
        
    }

    completeTodo() {
        console.log(this)
        this.childNodes[1].classList.toggle('cross');
        let checkBox = this.firstChild;
        checkBox.firstChild.classList.toggle('checked');
        this.completed = true;
        
        
    }
    
    removeTodo() {
        let item = this.parentElement;
        item.style.display = "none";
    }  
}