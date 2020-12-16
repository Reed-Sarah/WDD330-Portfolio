import { displayBoard, displayBodyPart, displayWrongLetters, displayLoseDialog, displayAlreadyUsedDialog, displayInvalidDialog, displayWinDialog} from './hangmanView.js';

export default class Hangman {
    constructor() {
this.summary =  [];
this.reference = [];
this.usedLetters = [];
this.board = [];
this.mistakes = 0;
    }

   getScriptures() {
        fetch('scriptures.json')
        .then(response => response.json())
        .then(scriptures => {
            // Do something with your data
            console.log(scriptures);
            this.buildBoard(scriptures);
        });
    }

    buildBoard(scriptures){
        let rand = Math.floor(Math.random() * scriptures.scriptures.length);
        this.summary = scriptures.scriptures[rand].summary;
        this.reference = scriptures.scriptures[rand].reference;
        console.log(this.summary);
        for (let i = 0; i < this.summary.length; i++){
            if (this.summary[i].match(/[a-z]/i)){
                this.board.push("_");
            }
            else{
                this.board.push(this.summary[i])
            }
        }
        displayBoard(this.board);
    }
    
    checkLetter(e) {
        console.log(e.keyCode);
        if (e.keyCode >= 65 && e.keyCode <= 90) {
    if (this.usedLetters.includes(e.key)){
        displayAlreadyUsedDialog()
    }
    else {
        this.usedLetters.push(e.key);
        let match = false;
        for (let i = 0; i < this.summary.length; i++){
            let caseSummary = this.summary[i].toLowerCase();
            if(caseSummary === e.key.toLowerCase()) {
                this.board[i] = this.summary[i];
                displayBoard(this.board);
                match = true;
                if (!this.board.includes("_")){
                    displayWinDialog(this.mistakes);
                }
            }
        }
        if (!match){
             this.mistakes += 1;
             displayBodyPart(this.mistakes);
             if (this.mistakes >=6){
               displayLoseDialog() ;
             }
             else{
              displayWrongLetters(e.key.toUpperCase());  
             }
        }
    }
}
else{
    displayInvalidDialog();
}
    }
    getHint(){
        return this.reference;
    }
}