# [word-guess-cli](https://lamontblack1.github.io/word-guess-cli/)
This is a node command line app using constructors and modules. As the name implies it is a word guess game.
My role in this project is creator.

# Why the project is useful
For the user, this is an easy to use word guess game in the terminal. 
For the beginning coder, this project demonstrates the use of basic use of constructors and object-oriented programming.

It makes use of: 
* [Inquirer](https://www.npmjs.com/package/inqurer) npm library is used to prompt the user for input
* Constructors

# Overview of how this project is organized
This project uses 2 constructors: Letter and Word. The Letter object uses two methods, one to allow a check and the other to return what to display based on whether it is guessed. The Word object uses methods to check which letters have been guessed correctly, what to display, and whether the word has been correctly guessed. index.js uses inquirer to use these objects to simply construct the game.

# How users can get started with this project
This is a command line app that is run in Node. It can be run entering the following in the terminal:
``` js
node index.js
```

# Screen Shots of the Working App

### Here is an example of a correct answer:
![Image of correct](https://lamontblack1.github.io/word-guess-cli/images/correct.jpg)

### Here is an example of an incorrect answer:
![Image of incorrect](https://lamontblack1.github.io/word-guess-cli/images/incorrect.jpg)
