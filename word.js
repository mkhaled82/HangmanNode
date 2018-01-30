var words = ['metallica', 'gunsnroses', 'pinkfloyd', 'nirvana', 'scorpions'];

var Word = function(){
	this.chooseWord = function() {
    	var word = words[Math.floor(Math.random() * words.length)];
    	return(word);
	}

	this.maskWord = function(word) {
		this.maskedResult = "";
	    for(var i=0; i < word.length;i++) { 
	        this.maskedResult = this.maskedResult + "_" ;
    	}
    return this.maskedResult;
	};

	this.modifyCharAt = function ( number, character, originalString ) {
	    var before;
	    var after;
	    var newstr;
	    var strlen = originalString.length;

	    before = originalString.substr(0, number);
	    after = originalString.substr(number+1, strlen);
	    newstr= before + character  + after;
	    return newstr;
	  };
};

module.exports = Word;