import Hangman from './hangmanContoller.js';
import {getScriptures} from './hangmanModel.js';
import {displayReference} from './hangmanView.js'
export let hangman = new Hangman;
getScriptures();


/* add event listeners*/
window.addEventListener("keydown", callCheckLetter);

let again = document.getElementById("playAgain");
again.addEventListener("click", playAgain); 

let tryAgain = document.getElementById("tryAgain");
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