export function displayBoard(board){
let scripture = document.getElementById("scripture");
scripture.innerHTML = "";
let space;
for (space of board){
    scripture.insertAdjacentHTML("beforeend", space);
}
}

export function displayBodyPart(mistakes){
    let bodyParts = document.querySelectorAll(".bodyPart");
    console.log(bodyParts[2]);
    console.log(mistakes)
    bodyParts[mistakes].style.display = "block";
}