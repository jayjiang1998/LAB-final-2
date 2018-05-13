$(document).ready(function(){
	var tarrotDeck    = [".card1",".card2",".card3",".card4",".card5",".card6",".card7",".card8",".card9"];

	for(var c = 0; c < 3; c++ ) {
		var randNum = Math.floor(Math.random() * 9);
		$(tarrotDeck[randNum]).show();
		
	}
});