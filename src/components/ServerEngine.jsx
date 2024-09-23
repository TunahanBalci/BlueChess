import ChessPiece from "./ChessPiece";

let board = [8][8];

function ServerEngine(props) {
  const gameID = props.gameID;

  const black = props.black;
  const white = props.white;

  black.id = props.black.id;
  white.id = props.white.id;
}

export default ServerEngine;

export function initBoard() {
  // from white teams perspective

  // assign pieces, i = row, j = col
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i === 0) {
        switch (j) {
          case 0:
            board[i][j] = new ChessPiece("rook", "black");
            break;
          case 1:
            board[i][j] = new ChessPiece("knight", "black");
            break;
          case 2:
            board[i][j] = new ChessPiece("bishop", "black");
            break;
          case 3:
            board[i][j] = new ChessPiece("queen", "black");
            break;
          case 4:
            board[i][j] = new ChessPiece("king", "black");
            break;
          case 5:
            board[i][j] = new ChessPiece("bishop", "black");
            break;
          case 6:
            board[i][j] = new ChessPiece("knight", "black");
            break;
          case 7:
            board[i][j] = new ChessPiece("rook", "black");
            break;
          default:
            break;
        }
      } else if (i === 1) {
        board[i][j] = new ChessPiece("pawn", "black");
      } else if (i === 6) {
        board[i][j] = new ChessPiece("pawn", "white");
      } else if (i === 7) {
        switch (j) {
          case 0:
            let piece_0 = new ChessPiece("rook", "white");
            piece_0.row = i;
            piece_0.col = j;
            board[i][j] = piece_0;
            break;
          case 1:
            let piece_1 = new ChessPiece("knight", "white");
            piece_1.row = i;
            piece_1.col = j;
            board[i][j] = piece_1;
            break;
          case 2:
            let piece_2 = new ChessPiece("bishop", "white");
            piece_2.row = i;
            piece_2.col = j;
            board[i][j] = piece_2;
            break;
          case 3:
            let piece_3 = new ChessPiece("queen", "white");
            piece_3.row = i;
            piece_3.col = j;
            board[i][j] = piece_3;
            break;
          case 4:
            let piece_4 = new ChessPiece("king", "white");
            piece_4.row = i;
            piece_4.col = j;
            board[i][j] = piece_4;
            break;
          case 5:
            let piece_5 = new ChessPiece("bishop", "white");
            piece_5.row = i;
            piece_5.col = j;
            board[i][j] = piece_5;
            break;
          case 6:
            let piece_6 = new ChessPiece("knight", "white");
            piece_6.row = i;
            piece_6.col = j;
            board[i][j] = piece_6;
            break;
          case 7:
            let piece_7 = new ChessPiece("rook", "white");
            piece_7.row = i;
            piece_7.col = j;
            board[i][j] = piece_7;
            break;
          default:
            break;
        }
      } else {
        board[i][j] = null;
      }
    }
  }
}

export function canMove(props) {

  const opponent = props.opponent;
  const piece = props.user.piece;
  const from = props.user.piece.from;
  const to = props.user.piece.to;


  if (opponent.checked){
  } else if (user.piece.isBlocked)

  // switch(piece.type){
  //     case "pawn":
  //     case "rook":
  //     case "knight":
  //     case "bishop":
  //     case "queen":
  //     case "king":
  //     default:
  // }
}
export function movePiece(props) {
  board[props.from.row][props.from.col] = null;
  board[props.to.row][props.to.col] = props.piece;

  // check for stalemate or draw
  // check for check or checkmate
  // check for 
}


//checks if the piece is preventing checkmate (eg. piece is between opponent rook and king)


