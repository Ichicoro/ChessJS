var chessboard = [];

var light = "#ffd281";
var dark = "#ffb734";

var img_vuota = "<img src='assets/images/vuota.png'>"
var alfiere_b = "<img src='assets/images/alfiere_b.png'>"
var alfiere_n = "<img src='assets/images/alfiere_n.png'>"
var cavallo_b = "<img src='assets/images/cavallo_b.png'>"
var cavallo_n = "<img src='assets/images/cavallo_n.png'>"
var pedone_b  = "<img src='assets/images/pedone_b.png'>"
var pedone_n  = "<img src='assets/images/pedone_n.png'>"
var re_b      = "<img src='assets/images/re_b.png'>"
var re_n      = "<img src='assets/images/re_n.png'>"
var regina_b  = "<img src='assets/images/regina_b.png'>"
var regina_n  = "<img src='assets/images/regina_n.png'>"
var torre_b   = "<img src='assets/images/torre_b.png'>"
var torre_n   = "<img src='assets/images/torre_n.png'>"






window.onload = function init() {
    chessboard = Array.prototype.map.call(document.querySelectorAll('#chessboard_table tr'), function(tr) {
        return Array.prototype.map.call(tr.querySelectorAll('td'), function(td) {
            return td;
        });
    });
    for (var i=0; i<chessboard.length; i++) {
        for (var j=0; j < chessboard.length; j++) {
            if (i % 2 == j % 2) {
                setCellColor(i, j, light);
            } else {
                setCellColor(i, j, dark);
            }
        }
    }
    resetBoard();
}


function setCellColor(y, x, color) {
    chessboard[y][x].style.backgroundColor = color;
}


function resetBoard() {
    clearBoard();
    resetPieces();
}


function clearBoard() {
    for (var i=0; i<chessboard.length; i++) {
        for (var j=0; j < chessboard.length; j++) {
            chessboard[i][j].innerHTML = img_vuota;
        }
    }
}


function resetPieces() {
    setPiece(0, 0, torre_n);
    setPiece(0, 1, cavallo_n);
    setPiece(0, 2, alfiere_n);
    setPiece(0, 3, regina_n);
    setPiece(0, 4, re_n);
    setPiece(0, 5, alfiere_n);
    setPiece(0, 6, cavallo_n);
    setPiece(0, 7, torre_n);
    for (var i=0; i<chessboard.length; i++) {
        setPiece(1, i, pedone_n);
        setPiece(6, i, pedone_b);
    }
    setPiece(7, 0, torre_b);
    setPiece(7, 1, cavallo_b);
    setPiece(7, 2, alfiere_b);
    setPiece(7, 3, regina_b);
    setPiece(7, 4, re_b);
    setPiece(7, 5, alfiere_b);
    setPiece(7, 6, cavallo_b);
    setPiece(7, 7, torre_b);
}


function setPiece(y, x, piece) {
    chessboard[y][x].innerHTML = piece;
}
