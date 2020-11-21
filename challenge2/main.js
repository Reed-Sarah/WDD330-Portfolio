import Hangman from './hangmanModel.js';

let hangman = new Hangman;
hangman.getScriptures();
window.addEventListener("keydown", callCheckLetter);

function callCheckLetter(e){
    hangman.checkLetter(e)
}