// "♔ ♕ ♖ ♗ ♘ ♙ ♚ ♛ ♜ ♝ ♞ ♟"
var atStep2;
var orig_y;
var orig_x;
var turnNumber;



function movePiece(y, x) {
    console.log("Clicked at " + y + "," + x);
    console.log("Is a piece: " + chessboard[y][x].innerHTML != img_vuota);
    if (!atStep2) {
    	if ((chessboard[y][x].innerHTML != img_vuota) && checkPlayer(y,x)) {
    		atStep2 = true;
    		setCellColor(y, x, red_square);
    		orig_y = y;
    		orig_x = x;
    	} else {
    		console.log("Not a chess piece.");
    	}
    } else {
        if (orig_y == y && orig_x == x && atStep2) {  // nvm
            atStep2 = false;
            resetCellColor();
        } else if (moveAt(orig_y, orig_x, y, x)) {    // let's do this
    		atStep2 = false;
    		resetCellColor();
            turnNumber += 1;
            document.getElementById("bigpagetitle").innerHTML = "Chess - Player " + Math.abs((turnNumber % 2)+1);
    	}
    }
}


function canMoveAt(orig_y, orig_x, new_y, new_x) {
	return (checkMoveset(orig_y, orig_x, new_y, new_x) &&
    checkNextPiece(orig_y, orig_x, new_y, new_x) &&
    checkPlayer(orig_y, orig_x));
}


function checkMoveset(orig_y, orig_x, new_y, new_x) {
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
        case pedone_b:
            return (((new_y == orig_y-1) && (Math.abs(new_x - orig_x) <= 1)) || ((orig_y == 6) && (new_y == 4) && (new_x == orig_x)));
        case pedone_n:
            return (((new_y == orig_y+1) && (Math.abs(new_x - orig_x) <= 1)) || ((orig_y == 1) && (new_y == 3) && (new_x == orig_x)));
        case cavallo_b: case cavallo_n:
            return ();
    }
}


function checkNextPiece(orig_y, orig_x, new_y, new_x) {
    var origPieceTxt = chessboard[orig_y][orig_x].innerHTML;
    var nextPieceTxt = chessboard[new_y][new_x].innerHTML;
    if (nextPieceTxt.endsWith("_b.png\">") && isPlayer2()) {
        return true;
    }
    if (nextPieceTxt.endsWith("_n.png\">") && !isPlayer2()) {
        return true;
    }
    if (nextPieceTxt == img_vuota) {
        return true;
    }
    return false;
}


function checkPlayer(orig_y, orig_x) {
    var pieceTxt = chessboard[orig_y][orig_x].innerHTML;
    if (pieceTxt.endsWith("_b.png\">") && !isPlayer2()) {
        return true;
    }
    if (pieceTxt.endsWith("_n.png\">") && isPlayer2()) {
        return true;
    }
    return false; 
}


function isPlayer2() {
    return (turnNumber % 2 != 0);
}
