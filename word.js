let Letter = require("./letter");

let Word = function (word) {
    this.word = word;
    this.wordArray = [];
    this.wordDisplay = function () {
        let str = ""
        for (let i = 0; i < this.wordArray.length; i++) {
            const element = this.wordArray[i];
            str += element.displayVal()
        };
        return str
    };
    this.guessLetter = function (letter) {
        let guessedCorrectly = false
        for (let i = 0; i < this.wordArray.length; i++) {
            const element = this.wordArray[i];
            let bln = element.checkLetter(letter)
            if (bln) {guessedCorrectly = true}
        };
        return guessedCorrectly;
    };

    this.populateWordArray = function () {
        let ary = this.word.split("");
        for (let i = 0; i < ary.length; i++) {
            const letterElement = ary[i];
            let newLetter = new Letter(letterElement, false);
            this.wordArray.push(newLetter)
        };
    };

    this.wordComplete = function () {
        let wordIsComplete = true;
        for (let i = 0; i < this.wordArray.length; i++) {
            const element = this.wordArray[i];
            if (!element.guessed) {wordIsComplete = false}
        };
        return wordIsComplete;
    }
};


module.exports = Word;

