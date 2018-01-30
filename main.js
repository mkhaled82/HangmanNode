var Game = require('./game.js');
var Word = require('./word.js');
var inquirer = require("inquirer");

var newGame = new Game();
//console.log("HINT:          " + newGame.chosenWord);
//console.log("MASKED:        " + newGame.maskedWord);
//console.log("TAGET GUESSES: " + newGame.targetGuesses);
//console.log("GUESSES LEFT:  " + newGame.guessesLeft);



var promptGuesses = function() {
	console.log(newGame.maskedWord);
	inquirer
		.prompt([
			{
		      type: "input",
		      message: "Enter a letter to guess the word",
		      name: "guess"
		    }
		])
		.then(function(guessedletter) {
			//console.log("YOU GUESSED:   " + guessedletter.guess);
			//console.log("TARGET GUESSES " + newGame.targetGuesses);
			console.log("GUESSES LEFT = " + newGame.guessesLeft);
			newGame.findMatch(guessedletter.guess); 
			if (newGame.targetGuesses === 0) {
				console.log("U WIN!");
				newGame = new Game();
				promptGuesses();
			}

			else if
				(newGame.guessesLeft === 0) { 
				console.log("U LOSE");
				newGame = new Game();
				promptGuesses();
			}

			else {
				promptGuesses();
			};
		});
};

promptGuesses();