var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

console.log("========== BASIC CARD ==========");

firstPresident.seeFront();
firstPresident.seeBack();

console.log("\n=== BOTH SIDES ===")

firstPresident.seeBothSides();

// ==========================

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log("\n\n========== CLOZE CARD ==========");

console.log("CLOZE: " + firstPresidentCloze.cloze);
console.log("PARTIAL: " + firstPresidentCloze.partial);
console.log("FULL TEXT: " + firstPresidentCloze.fullText);

console.log("\n============\n")

firstPresidentCloze.seeBothSides();