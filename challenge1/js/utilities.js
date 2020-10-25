

export function tasksLeft() {
    let counter = 0;
    let item;
    let newList = window.toDoList;
    for (item of newList){
        if(!item.completed){
            counter++;
        }
    }
    document.getElementById("tasksLeft").innerHTML = counter;
}

export function removeFromList(id) {
    let index = window.toDoList.findIndex(element => element.id === id);
    if (index != -1) {
    toDoList.splice(index, 1);
    localStorage.setObj("toDoList", window.toDoList);
    tasksLeft();
    }
}

export function completeOnList(id) {
    let index = window.toDoList.findIndex(element => element.id === id);
    if (index != -1) {
    if (window.toDoList[index].completed){
        window.toDoList[index].completed = false;
    } 
    else {
        window.toDoList[index].completed = true; 
    }
    localStorage.setObj("toDoList", window.toDoList);
    tasksLeft();
}
}