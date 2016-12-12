// "♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟"
var atStep2 = false;
var orig_y;
var orig_x;

//(Math.abs(orig_y-new_y) & Math.abs(orig_x-new_x)) == (0 || 1)

function movePiece(y, x) {
    console.log("Clicked at " + y + "," + x);
    console.log("Is a piece: " + chessboard[y][x].innerHTML != img_vuota);
    if (!atStep2) {
    	if (chessboard[y][x].innerHTML != img_vuota) {
    		atStep2 = true;
    		setCellColor(y, x, red_square);
    		orig_y = y;
    		orig_x = x;
    	} else {
    		console.log("Not a chess piece.");
    	}
    } else {
        if (orig_y == y && orig_x == x && atStep2) {
            atStep2 = false;
            resetCellColor();
        }  else if (moveAt(orig_y, orig_x, y, x)) {
    		atStep2 = false;
    		resetCellColor();
    	}
    }
}


function canMoveAt(orig_y, orig_x, new_y, new_x) {
	switch (chessboard[orig_y][orig_x].innerHTML) {
		case torre_b: case torre_n:
			return (orig_y == new_y || orig_x == new_x);
		case alfiere_b: case alfiere_n:
			return (Math.abs(orig_y-orig_x) == Math.abs(new_y-new_x)
					|| Math.abs(orig_y-new_y) == Math.abs(orig_x-new_x));
		case regina_b: case regina_n:
			return ((orig_y == new_y || orig_x == new_x)
					|| (Math.abs(orig_y-orig_x) == Math.abs(new_y-new_x) || Math.abs(orig_y-new_y) == Math.abs(orig_x-new_x)));
		case re_b: case re_n:
			return (Math.abs(orig_x - new_x) <= 1 && Math.abs(orig_y - new_y) <= 1);
	}
}


