var coordX= 300;
var coordY= 300;
var TILES = [];



window.onload = function() {
   createPieces();
   $("shufflebutton").addEventListner("click", shuffle);
 };

function createPieces() {
	TILES = document.querySelectorAll("#puzzlearea div");
 	var row = 0; // row
 	var limit = 3;
 	for (var i = 0; i < TILES.length; i++) {
 		for (var col = 0; col <= limit; col++) { // x deal with the columns
 			TILES[i].setAttribute("class","puzzlepiece"); // make the tiles demensions  add classname should be setattribute
 			TILES[i].style.top = 100 * row + "px";// positions the tile
 			TILES[i].style.left = 100 * col  + "px";
 			TILES[i].style.backgroundPosition = "-" + col * 100 + "px " + row * -100 + "px"; // set the bacground
 		
 			i++;
 			
 		}
 		
 	
 		    
 		    
 		    
 		    
 		 //	TILES[a].addEventListner("click", moveTile);
 			// TILES[a].addEventListner("mouseover", hover);
 		    
 		    
 		
 		
 		
 		
 		row++;
 		if (row > 2) {
 			limit= 2;
 		}
 		i--;
 	}
 }

 function hover(event) {
 	if (testNeighbour(this.style.left, this.style.top)) {
 		this.addClassName("movablepiece");
 	} else if (this.hasClassName("movablepiece")) {
 		this.removeClassName("movablepiece");
 	}
}

function moveTileHelp(tile) {
 	if (testNeighbour(tile.style.left, tile.style.top)) {
 		var holderX = tile.style.left;
 		var holderY = tile.style.top;
 		tile.style.left = coordX + "px";
 		tile.style.top = coordY+ "px";
 		coordX = parseInt(holderX);
 		coordY = parseInt(holderY);
 	}
}

function moveTile(event) {
 	moveTileHelp(this);
 }

function shuffle() {
 	var holder = [];
 	for (var i = 0; i < 200; i++) {
 		for (var row= 0; row < TILES.length; row++) {
 			if (testNeighbour(TILES[row].style.left, TILES[row].style.top)) {
				holder.push(TILES[row]);
			}
		}
		moveTileHelp(holder[Math.floor(Math.random() * holder.length)]);
		holder = [];
	}
}

function testNeighbour(x, y) {
 	if (Math.abs(coordY - parseInt(y)) == 100) {
 		if (Math.abs(coordX - parseInt(x)) == 0) {
 			return true;
 		}
 	} else if (Math.abs(coordX - parseInt(x)) == 100) {
 		if (Math.abs(coordY - parseInt(y)) == 0) {
 			return true;
 		}
 	}
 	return false;
}
