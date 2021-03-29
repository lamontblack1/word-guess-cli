let Word = require("./word");
let inquirer = require("inquirer")
var currentWord;
let lettersGuessed = []
let totalGuesses = 8
let guessesLeft = totalGuesses

let wordList = ["impossible", "tomorrow", "intangible", "potentiality", "agrarian", "progressiveness","shishkebab"]

function playGame() {
    
        inquirer.prompt([
            {
                name: "guess",
                message: "Guess a letter!"
            }
            ]).then(function (answers) {
                let letterGuessedCorrectly = handleGuessedLetter(answers.guess);
                //check if word is complete and start again
                if (letterGuessedCorrectly && currentWord.wordComplete()) {
                        console.log("CORRECT!!")
                        getNewWord()  //resets currentWord and letters guessed
                } 
                if (parseInt(guessesLeft) === 0) {
                    console.log("You lose.")
                    console.log("Answer is: " + currentWord.word)
                    getNewWord()
                }

                // recursively run play game again to the questions again
                playGame()
            });
}

function handleGuessedLetter(letter) {
    let guessedCorrectly = currentWord.guessLetter(letter)
    console.log(currentWord.wordDisplay() + "\n")
    
    if (!guessedCorrectly) {
        lettersGuessed.push(letter)
        guessesLeft--;
        console.log("Guesses Left: " + guessesLeft)
    }
    console.log("Incorrect letters guessed: " + lettersGuessed.join(",") + "\n\n")
    return guessedCorrectly
};

function getNewWord() {
    currentWord = new Word(getRandomWord());
    currentWord.populateWordArray()
    lettersGuessed = [];
    guessesLeft = totalGuesses
    console.log("New word: \n" + currentWord.wordDisplay() + "\n\n");

}

function getRandomWord() {
    let i = Math.floor(Math.random() * wordList.length)
    return wordList[i]
};

getNewWord();
playGame();


