var alfiere_suono 		  = new Audio("assets/sounds/alfiere_suono.wav");
var cavallo_suono 		  = new Audio("assets/sounds/alfiere_suono.wav");
var re_suono              = new Audio("assets/sounds/alfiere_suono.wav");
var regina_suono          = new Audio("assets/sounds/alfiere_suono.wav");
var torre_suono           = new Audio("assets/sounds/alfiere_suono.wav");
var pedone_suono          = new Audio("assets/sounds/alfiere_suono.wav");
var movimento_pezzo_suono = new Audio("assets/sounds/movimento_pezzo_suono.wav");

function playRCSound(y, x) { 
    switch (chessboard[y][x].innerHTML) {
        case alfiere_b: case alfiere_n:   alfiere_suono.play();  break;
        case cavallo_b: case cavallo_n:   cavallo_suono.play();  break;
        case re_b: case re_n:             re_suono.play();       break;
        case regina_b: case regina_n:     regina_suono.play();   break;
        case torre_b: case torre_n:       torre_suono.play();    break;
        case pedone_b: case pedone_n:     pedone_suono.play();   break; 
    }
    
}

function playMovementSound() {
    movimento_pezzo_suono.play();
}
