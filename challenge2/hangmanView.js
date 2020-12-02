import {removeKeyListener} from './main.js'; 

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
    console.log(mistakes)
    bodyParts[mistakes - 1].style.display = "block";
}

export function displayWrongLetters(letter){
    let wrongLettersDiv = document.getElementById("wrongLetters");
    wrongLettersDiv.insertAdjacentHTML("beforeend", letter + " ");
    }
    
export function displayReference(ref){
let dialog = document.getElementById("reference");
let reference = document.getElementById("ref");
reference.innerHTML = ref;
dialog.show();
setTimeout(function() {
    dialog.close();
  }, 3000);

}

export function displayAlreadyUsedDialog(id) {
    let dialog = document.getElementById("alreadyUsedLetter");
        dialog.show();
        setTimeout(function() {
            dialog.close();
          }, 3000);
}

export function displayInvalidDialog() {
    let dialog = document.getElementById("invalid");
        dialog.show();
        setTimeout(function() {
            dialog.close();
          }, 3000);
}

export function displayLoseDialog(){
    removeKeyListener()
    let dialog = document.getElementById("lose");
    dialog.showModal();
}

export function displayWinDialog(mistakes){
    removeKeyListener()
    let guesses = document.getElementById("guesses")
    guesses.innerHTML = (5 - mistakes)
    let dialog = document.getElementById("win");
    dialog.showModal();
}
