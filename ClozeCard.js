function ClozeCard (text, cloze) {

	if(!this instanceof ClozeCard) {
		return new ClozeCard(text, cloze);
	};

	this.separate = function (){
		this.partial = this.text.replace(this.cloze, ". . .");
	}

	this.verify = function(){
		if(text.search(cloze) === -1){
			console.log("This doesn't work. " + "'" + cloze + "'" + " isn't in " + "'" + text + "'");
		}
	}

	this.verify();

	this.text = text;
	this.cloze = cloze;
	this.partial = "";
	this.fullText = text;

	this.separate();

	this.seeBothSides = function() {
		console.log("FRONT OF THE CARDS SAYS:\n" + this.partial + "\n");
		console.log("THE ANSWERS IS:\n" + this.cloze);
	}

	

};

module.exports = ClozeCard;