var cards = new Set()
cards.add(♠)
cards.add('♠')
cards.add('♥')
cards.add('♦')
cards.add('♣')

cards.has('♠') //true

cards.has('joker') //false

cards.size //4

cards.forEach(function(card){
	console.log(card)
});

/*
Would log:
♠ 
♥ 
♦ 
♣ 
*/

cards.add('♣')

cards.size // Still for as ♣ was already there in the cards set.