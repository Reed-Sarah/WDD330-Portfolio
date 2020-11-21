import { displayBoard, displayBodyPart} from './hangmanView.js';

export default class Hangman {
    constructor() {
this.summary =  [];
this.usedLetters = [];
this.board = [];
this.mistakes = -1;
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
        console.log(this.usedLetters)

    console.log(e.key);
    console.log(this.board);
    if (this.usedLetters.includes(e.key)){
    alert("you've already guessed this letter silly!")
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
            }
        }
        if (!match){
             this.mistakes += 1;
                displayBodyPart(this.mistakes);
        }
    }
    console.log(this.board);
    }

    

}

