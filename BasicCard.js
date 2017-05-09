function BasicCard (front, back) {

	if(!this instanceof BasicCard){
		return new BasicCard(front, back);
	};

	this.front = front;
	this.back = back;

	//displays the front of the card
	this.seeFront = function() {
		console.log("FRONT OF CARD SAYS\n" + "--- " + this.front + " ---");
	};

	//displays the back of the card
	this.seeBack = function() {
		console.log("BACK OF CARD SAYS\n" + "--- " + this.back + " ---");
	};

	//displays both sides of the card
	this.seeBothSides = function() {
		console.log("FRONT OF CARD SAYS\n" + "--- " + this.front + " ---\n");
		console.log("BACK OF CARD SAYS\n" + "--- " + this.back + " ---");
	};


};

module.exports = BasicCard;