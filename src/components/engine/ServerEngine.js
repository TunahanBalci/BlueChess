import { initBoard } from "../ServerEngine";
import ChessUnit from "./ChessUnit";


export default function ServerEngine(){

  const board = new Array(8);
  for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
  }

  initBoard(board);
}


export function initBoard(board){
  
  board[0][0] = new ChessUnit("rook", "black", [0, 0]);
  board[0][1] = new ChessUnit("knight", "black", [0, 1]);
  board[0][2] = new ChessUnit("bishop", "black", [0, 2]);
  board[0][3] = new ChessUnit("queen", "black", [0, 3]);
  board[0][4] = new ChessUnit("king", "black", [0, 4]);
  board[0][5] = new ChessUnit("bishop", "black", [0, 5]);
  board[0][6] = new ChessUnit("knight", "black", [0, 6]);
  board[0][7] = new ChessUnit("rook", "black", [0, 7]);

  for(let i = 0; i < 8; i++){
    board[1][i] = new ChessUnit("pawn", "black", [1, i]);
  }

  board[7][0] = new ChessUnit("rook", "white", [7, 0]);
  board[7][1] = new ChessUnit("knight", "white", [7, 1]);
  board[7][2] = new ChessUnit("bishop", "white", [7, 2]);
  board[7][3] = new ChessUnit("queen", "white", [7, 3]);
  board[7][4] = new ChessUnit("king", "white", [7, 4]);
  board[7][5] = new ChessUnit("bishop", "white", [7, 5]);
  board[7][6] = new ChessUnit("knight", "white", [7, 6]);
  board[7][7] = new ChessUnit("rook", "white", [7, 7]);

  for(let i = 0; i < 8; i++){
    board[6][i] = new ChessUnit("pawn", "white", [6, i]);
  }
  
  calculateProtectedPieces(board);
  calculateMoves(board);
}


// function calculateProtectedPieces(board){


//   for(let i = 0; i < 8; i++){ // initialize as not protected
//     for(let j = 0; j < 8; j++){
//       if(board[i][j] !== undefined){
//         board[i][j].protectedPieces = [];

//         for(let k = 0; k < 8; k++){
//           for(let l = 0; l < 8; l++){
//             board[i][j].possibleMoves[k][l] = false;
//           }
//         }
//         board[i][j].isProtected = false;
//       }
//     }
//   }

//   for(let i = 0; i < 8; i++){
//     for(let j = 0; j < 8; j++){
//       if(board[i][j] !== undefined){
//         let piece = board[i][j];
//         let moves = piece.possibleMoves;
//         for(let k = 0; k < 8; k++){
//           for(let l = 0; l < 8; l++){
//             if(moves[k][l] === true){
//               board[k][l].protectedPieces.push(piece);
//             }
//           }
//         }
//       }
//     }
//   }

//   for(let i = 0; i < 8; i++){
//     for(let j = 0; j < 8; j++){
//       if(board[i][j] !== undefined){
//         if(board[i][j].protectedPieces.length > 0){
//           board[i][j].isProtected = true;
//         }
//       }
//     }
//   }
// }


function calculateMoves(board){

  for(let row = 0; row < 8; row++){
    for(let col = 0; col < 8; col++){

      if (board[row][col] === undefined) {
        continue;
      };

      switch(board[row][col].type){
        case "pawn":
          pawnMoves(board, row, col);
          break;
        case "rook":
          rookMoves(board, row, col);
          break;
        case "knight":
          knightMoves(board, row, col);
          break;
        case "bishop":
          bishopMoves(board, row, col);
          break;
        case "queen":
          queenMoves(board, row, col);
          break;
        case "king":
          kingMoves(board, row, col);
          break;
      }
    }



  }


export function pawnMoves (board, row, col){

  let unit = board[row][col];

  let x = 1;

  if (unit.team === "black"){
    x = -1;
  } else {
    x = 1;
  }

  if (board[row + x][col] === undefined){
    unit.possibleMoves[row + x][col] = true;
  } else {
    unit.possibleMoves[row + x][col] = false;
  }

  if (board[row + x][col + 1] !== undefined && board[row + x][col + 1].team !== unit.team){
    unit.possibleMoves[row + x][col + 1] = true;
  }

}




export function kingRayCast(board){
  
}