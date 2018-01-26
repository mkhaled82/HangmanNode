var Hangman_game = require('./hangman_game.js');
var newGame = new Hangman_game();
var maskedWord = newGame.maskWord();  // console.log(maskedWord);
newGame.findMatch("a");