var Word = require('./word.js');
var pickedWord = new Word();
	
var Playgame = function(){
	this.findMatch = function(character) {
		if (this.guessArray.indexOf(character) > -1){
	      console.log("You already guessed " + character + " !! try another one please");
	    }
	  
		else if (this.chosenWord.includes(character)) {
			this.guessArray.push(character);
	      	this.guessesLeft--;
			for (var pos=0; pos<this.chosenWord.length; pos++){
				if (this.chosenWord.charAt(pos) === character) {
					this.maskedWord = pickedWord.modifyCharAt(pos, character, this.maskedWord);
					this.targetGuesses--;
				}
			}
		}
		
		else { this.guessesLeft--; }
	  };



	this.wins = 0;
	this.losses = 0;
	this.guessesLeft = 13;
	this.userGuess = 0;
	this.guessArray =[];
	this.targetGuesses = 0; 
	this.chosenWord = pickedWord.chooseWord();
	this.maskedWord = pickedWord.maskWord(this.chosenWord);
	this.targetGuesses = this.chosenWord.length;
}


module.exports = Playgame;





