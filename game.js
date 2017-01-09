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
            showPossibleMoves(orig_y, orig_x);
        } else {
            //console.log("Not a chess piece.");
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
            playMovementSound();
        }
    }
}


function canMoveAt(orig_y, orig_x, new_y, new_x) {
    return (checkMoveset(orig_y, orig_x, new_y, new_x) &&
    checkNextPiece(orig_y, orig_x, new_y, new_x) &&
    checkPlayer(orig_y, orig_x) && isPathClear(orig_y, orig_x, new_y, new_x));
}


function cMoveAt(orig_y, orig_x, new_y, new_x) {
    return (checkMoveset(orig_y, orig_x, new_y, new_x) &&
    checkNextPiece(orig_y, orig_x, new_y, new_x)/* &&
    checkPlayer(orig_y, orig_x) */);
}






/* PATH CHECKING! */


function isPathClear(orig_y, orig_x, new_y, new_x) {
    switch (chessboard[orig_y][orig_x].innerHTML) {
        case torre_b: case torre_n:
            return checkTowerPath(orig_y, orig_x, new_y, new_x);
        case alfiere_b: case alfiere_n:
            return checkBishopPath(orig_y, orig_x, new_y, new_x);
        case regina_b: case regina_n:
            return checkTowerPath(orig_y, orig_x, new_y, new_x) || checkBishopPath(orig_y, orig_x, new_y, new_x);
        default: return true;
    }
    return true;
}


function checkTowerPath(orig_x, orig_y, new_x, new_y) {
    var x_increment, y_increment;

    // Vede se new_x è a destra (+1), a sinistra (-1), o sulla stessa X di orig_x
    if (orig_x > new_x)
        x_increment = -1;
    else if (orig_x == new_x)
        x_increment = 0;
    else
        x_increment = +1;

    // Vede se new_x è sopra (+1), sotto (-1), o sulla stessa Y di orig_y
    if (orig_y > new_y)
        y_increment = -1;
    else if (orig_y == new_y)
        y_increment = 0;
    else
        y_increment = +1;

    // Tiene traccia della cella attuale, iniziando da old...
    var current_x = orig_x + x_increment;
    var current_y = orig_y + y_increment;

    // ... e finendo in new
    while (current_x != new_x || current_y != new_y) {
        if (chessboard[current_x][current_y].innerHTML != img_vuota) return false;
        // Spostandosi secondo gli incrementi calcolati prima
        current_x += x_increment;
        current_y += y_increment;
    }

    return true;

}


function checkBishopPath(orig_y, orig_x, new_y, new_x) {
    var x_increment, y_increment;
    if (new_y > orig_y) {
        y_increment = 1;
    } else {
        y_increment = -1;
    }

    if (new_x > orig_x) {
        x_increment = 1;
    } else {
        x_increment = -1;
    }

    var current_x = orig_x + x_increment;
    var current_y = orig_y + y_increment;

    while (current_x != new_x && current_y != new_y) {
        if (chessboard[current_y][current_x].innerHTML != img_vuota) return false;
        current_x += x_increment;
        current_y += y_increment;
    }

    return true;
}





/* MOVESET CHECKING */


function checkMoveset(orig_y, orig_x, new_y, new_x) {
    switch (chessboard[orig_y][orig_x].innerHTML) {
        case torre_b: case torre_n:
            return checkTower(orig_y, orig_x, new_y, new_x);
        case alfiere_b: case alfiere_n:
            return checkBishop(orig_y, orig_x, new_y, new_x);
        case regina_b: case regina_n:
            return checkQueen(orig_y, orig_x, new_y, new_x);
        case re_b: case re_n:
            return checkKing(orig_y, orig_x, new_y, new_x);
        case pedone_b:
            return checkWhitePawn(orig_y, orig_x, new_y, new_x)
        case pedone_n:
            return checkBlackPawn(orig_y, orig_x, new_y, new_x);
        case cavallo_b: case cavallo_n:
            return checkHorse(orig_y, orig_x, new_y, new_x);
    }
}


function checkTower(orig_y, orig_x, new_y, new_x) {
    return (orig_y == new_y || orig_x == new_x);
}


function checkBishop(orig_y, orig_x, new_y, new_x) {
    return (Math.abs(orig_y-new_y) == Math.abs(orig_x-new_x));
}


function checkQueen(orig_y, orig_x, new_y, new_x) {
    return (checkTower(orig_y, orig_x, new_y, new_x) || checkBishop(orig_y, orig_x, new_y, new_x));
}


function checkKing(orig_y, orig_x, new_y, new_x) {
    return (Math.abs(orig_x - new_x) <= 1 && Math.abs(orig_y - new_y) <= 1);
}


function checkWhitePawn(orig_y, orig_x, new_y, new_x) {
    return (((new_y == orig_y-1) && (new_x == orig_x) && !isBlackPiece(new_y, new_x))
                || ((new_y == orig_y-1) && (Math.abs(new_x - orig_x) == 1) && (isBlackPiece(new_y, new_x))
                || ((orig_y == 6) && (new_y == 4) && (new_x == orig_x))));
}


function checkBlackPawn(orig_y, orig_x, new_y, new_x) {
    return (((new_y == orig_y+1) && (Math.abs(new_x - orig_x) == 1) && isWhitePiece(new_y, new_x))
                || ((orig_y == 1) && (new_y == 3) && (new_x == orig_x))
                || ((new_y == orig_y+1) && (new_x == orig_x) && !isWhitePiece(new_y, new_x)));
}


function checkHorse(orig_y, orig_x, new_y, new_x) {
    var abs_y = Math.abs(orig_y-new_y);
    var abs_x = Math.abs(orig_x-new_x);
    return ((abs_y > 0 && abs_y <= 2) && (abs_x > 0 && abs_x <= 2) && (abs_x != abs_y));
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


function isBlackPiece(orig_y, orig_x) {
    var pieceTxt = chessboard[orig_y][orig_x].innerHTML;
    if (pieceTxt.endsWith("_b.png\">")) {
        return false;
    }
    if (pieceTxt.endsWith("_n.png\">")) {
        return true;
    }
    return false;
}


function isWhitePiece(orig_y, orig_x) {
    var pieceTxt = chessboard[orig_y][orig_x].innerHTML;
    if (pieceTxt.endsWith("_b.png\">")) {
        return true;
    }
    if (pieceTxt.endsWith("_n.png\">")) {
        return false;
    }
    return false;
}


function showPossibleMoves(y, x) {
    for (var i=0; i<chessboard.length; i++) {
        for (var j=0; j<chessboard.length; j++) {
            if (checkMoveset(y, x, i, j) && checkNextPiece(y, x, i, j) && isPathClear(y, x, i, j)) {
                setCellColor(i, j, "#09f4c1"); // #32cd32
                if ((isBlackPiece(i,j) && !isPlayer2()) || (isWhitePiece(i,j) && isPlayer2())) {
                    setCellColor(i, j, "#c109f4"); // #8032cd
                }
                console.log(i + "," + j);
            }
        }
    }
}


function getPieceName(y, x) {
    switch (chessboard[y][x].innerHTML) {
        case torre_b: return "White tower";
        case torre_n: return "Black tower";
        case cavallo_b: return "White horse";
        case cavallo_n: return "Black horse";
        case alfiere_b: return "White bishop";
        case alfiere_n: return "Black bishop";
        case re_b: return "White king";
        case re_n: return "Black king";
        case regina_b: return "White queen";
        case regina_n: return "Black queen";
        case pedone_b: return "White pawn";
        case pedone_n: return "Black pawn";
        case img_vuota: return "Empty square";
        default: return "null";
    }
}


/*
PEZZI
1 bianco  -  2 nero  -  0 vuota
0 torre
1 cavallo
2 alfiere
3 re
4 regina
5 pedone
*/

function getPieceID(y, x) {
    switch (chessboard[y][x].innerHTML) {
        case img_vuota: return 00;
        case torre_b: return 10;
        case torre_n: return 20;
        case cavallo_b: return 11;
        case cavallo_n: return 21;
        case alfiere_b: return 12;
        case alfiere_n: return 22;
        case re_b: return 13;
        case re_n: return 23;
        case regina_b: return 14;
        case regina_n: return 24;
        case pedone_b : return 15;
        case pedone_n: return 25;
    }
}


function isChecking(y, x) {
    var checkmate = false;
    if (playerNum = 0) {
        var colorOfEnemy = "_n.png\">";
    } else {
        var colorOfEnemy = "_b.png\">";
    }
}
