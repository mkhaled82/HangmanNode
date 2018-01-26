var words = ['metallica', 'gunsnrosesa', 'pinkfloyda', 'nirvana', 'scorpionsa'];
var Playgame = function(){


	this.chooseWord = function() {
    	var word = words[Math.floor(Math.random() * words.length)];
    	return(word);
	};

	this.maskWord = function() {
	    var result = ""; // This is the variable we want to use  
	    for(var i=0; i < this.chosenWord.length;i++) { 
	        result = result + "_" ;
    	}
    return result;
	};

	this.findMatch = function(character) {
		if (this.chosenWord.includes(character)) {

		for (var pos=0; pos<this.chosenWord.length; pos++){
			if (this.chosenWord.charAt(pos) === character) {
				console.log("FOUND MATCH AT " + pos);
				//hiddenWord = modifyCharAt(pos, character, hiddenWord);
				this.targetGuesses--;
			}
			else { }
			}
		}
	}

	this.wins = 0;
	this.losses = 0;
	this.guessesLeft = 13;
	this.userGuess = 0;
	this.guessArray =[];
	this.targetGuesses = 0;
	this.chosenWord = this.chooseWord();

}

module.exports = Playgame;