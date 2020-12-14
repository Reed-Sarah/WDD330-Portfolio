import Hangman from './hangmanModel.js';
import {displayReference} from './hangmanView.js'
let hangman = new Hangman;
hangman.getScriptures();
window.addEventListener("keydown", callCheckLetter);
let hiddenInput = document.getElementById("hidden");
hiddenInput.focus();

let tryAgain = document.getElementById("playAgain");
tryAgain.addEventListener("click", playAgain); 

let hintBtn = document.getElementById('hint');
hintBtn.addEventListener("click", function(){ 
    let reference = hangman.getHint();
displayReference(reference);})


function callCheckLetter(e){
    hangman.checkLetter(e)
}

function playAgain(){
    location.reload();
    return false;
}

export function removeKeyListener() {
    window.removeEventListener("keydown", callCheckLetter);
}