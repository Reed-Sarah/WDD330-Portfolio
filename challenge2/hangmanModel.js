import {hangman} from './main.js';
   export function getScriptures() {
        fetch('scriptures.json')
        .then(response => response.json())
        .then(scriptures => {
            // Do something with your data
            //console.log(scriptures);
            hangman.buildBoard(scriptures);
            return scriptures;
        });
    }

    