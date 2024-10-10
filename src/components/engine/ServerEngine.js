import { initBoard } from "../ServerEngine";
import ChessUnit from "./ChessUnit";


export default function ServerEngine() {

  const board = new Array(8);
  for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
  }
  let kingLoc_black = [0, 4];
  let kingLoc_white = [7, 4];

  initBoard(board);
}


export function initBoard(board) {

  board[0][0] = new ChessUnit("rook", "black", [0, 0]);
  board[0][1] = new ChessUnit("knight", "black", [0, 1]);
  board[0][2] = new ChessUnit("bishop", "black", [0, 2]);
  board[0][3] = new ChessUnit("queen", "black", [0, 3]);
  board[0][4] = new ChessUnit("king", "black", [0, 4]);
  board[0][5] = new ChessUnit("bishop", "black", [0, 5]);
  board[0][6] = new ChessUnit("knight", "black", [0, 6]);
  board[0][7] = new ChessUnit("rook", "black", [0, 7]);

  for (let i = 0; i < 8; i++) {
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

  for (let i = 0; i < 8; i++) {
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


function calculateMoves(board) {

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      if (board[row][col] === undefined) {
        continue;
      };

      switch (board[row][col].type) {
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
}


export function pawnMoves(board, row, col) {

  let unit = board[row][col];

  let x = 1;

  if (unit.team === "black") {
    x = -1;
  } else {
    x = 1;
  }

  if (board[row + x][col] === undefined) {
    unit.possibleMoves[row + x][col] = true;
  } else {
    unit.possibleMoves[row + x][col] = false;
  }

  if (board[row + x][col + 1] !== undefined && board[row + x][col + 1].team !== unit.team) {
    unit.possibleMoves[row + x][col + 1] = true;
  }

}



export function rookMoves(board, row, col) {
  const unit = board[row][col];

  let y = unit.location[0];
  let x = unit.location[1];


  for (let i = 1; i < 8; i++) {
    if (board[x][y + i] === undefined) { // vertical downwards
      unit.possibleMoves[x][y + i] = true;
    } else if (board[x][y + i].team !== unit.team) {
      unit.possibleMoves[x][y + i] = true;
      break;

    }

    if (board[x][y - i] === undefined) { // vertical upwards
      unit.possibleMoves[x][y - i] = true;
    } else if (board[x][y - i].team !== unit.team) {
      unit.possibleMoves[x][y - i] = true;
      break;
    }

    if (board[x + i][y] === undefined) { // horizontal right
      unit.possibleMoves[x + i][y] = true;
    } else if (board[x + i][y].team !== unit.team) {
      unit.possibleMoves[x + i][y] = true;
      break;
    }

    if (board[x - i][y] === undefined) { // horizontal left
      unit.possibleMoves[x - i][y] = true;
    } else if (board[x - i][y].team !== unit.team) {
      unit.possibleMoves[x - i][y] = true;
      break;
    }
  }
}


export function bishopMoves(board, row, col) {
  const unit = board[row][col];

  let x = unit.location[1];
  let y = unit.location[0];

  for (let i = 1; i < 8; i++) { // diagonal right down
    if (board[x + i][y + i] === undefined) {
      unit.possibleMoves[x + i][y + i] = true;
    } else if (board[x + i][y + i].team !== unit.team) {
      unit.possibleMoves[x + i][y + i] = true;
      break;
    }

    if (board[x - i][y + i] === undefined) { // diagonal right up
      unit.possibleMoves[x - i][y + i] = true;
    } else if (board[x - i][y + i].team !== unit.team) {
      unit.possibleMoves[x - i][y + i] = true;
      break;
    }

    if (board[x + i][y - i] === undefined) { // diagonal left down
      unit.possibleMoves[x + i][y - i] = true;
    } else if (board[x + i][y - i].team !== unit.team) {
      unit.possibleMoves[x + i][y - i] = true;
      break;
    }

    if (board[x - i][y - i] === undefined) { // diagonal left up
      unit.possibleMoves[x - i][y - i] = true;
    } else if (board[x - i][y - i].team !== unit.team) {
      unit.possibleMoves[x - i][y - i] = true;
      break;
    }
  }
}
export function kingRayCast(board) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

      switch (board[i][j].type) {
        case "bishop":

          board[i][j].inRaycast = true;
          if (bishopRayCast(board, i, j)) {
            board[i][j].inRaycast = true;
          }
          break;
        case "rook":

          board[i][j].inRaycast = true;
          if (rookRayCast(board, i, j)) {
            board[i][j].inRaycast = true;
          }
          break;
        case "queen":
          board[i][j].inRaycast = true;
          if (bishopRayCast(board, i, j) || rookRayCast(board, i, j)) {
            board[i][j].inRaycast = true;
          }
          break;
        default:
          break;
          
      }
    }
  }
}

export function rookRayCast(board) {
  
  let down_locations = [];
  let up_locations = [];
  let right_locations = [];
  let left_locations = [];

  const unit = board[row][col];

  let y = unit.location[0];
  let x = unit.location[1];

  let kingLoc;

  if (unit.team === "black") {
    kingLoc = kingLoc_black;
  } else {
    kingLoc = kingLoc_white;
  }

  for (let i = 1; i < 8; i++) {

    let a = i + 1;
    
    if (board[x][y + i].team !== unit.team){
      down_locations.push([x, y + i]);
    }

    if (board[x][y + a].location === kingLoc) { // vertical downwards
      if(down_locations.length === 1){
        board[down_locations[0][0]][down_locations[0][1]].canMove = false;
      }
    }

    /////////////////////////////////////////////////

    if (board[x][y - i].team !== unit.team){
      up_locations.push([x, y + i]);
    }

    if (board[x][y - a].location === kingLoc) { // vertical upwards
      if(up_locations.length === 1){
        board[up_locations[0][0]][up_locations[0][1]].canMove = false;
      }
    }
    
    /////////////////////////////////////////////////


    if (board[x + i][y].team !== unit.team){
      right_locations.push([x, y + i]);
    }

    if (board[x + a][y].location === kingLoc) { // horizontal right
      if(right_locations.length === 1){
        board[right_locations[0][0]][right_locations[0][1]].canMove = false;
      }
    }
    
    /////////////////////////////////////////////////


    if (board[x - i][y].team !== unit.team){
      left_locations.push([x, y + i]);
    }

    if (board[x - a][y].location === kingLoc) { // horizontal left
      if(left_locations.length === 1){
        board[left_locations[0][0]][left_locations[0][1]].canMove = false;
      }
    }
  }
}

export function bishopRayCast(board, row, col) {

  let diagonalRightDown_locations = [];
  let diagonalRightUp_locations = [];
  let diagonalLeftDown_locations = [];
  let diagonalLeftUp_locations = [];

  const unit = board[row][col];

  let kingLoc;

  if (unit.team === "black") {
    kingLoc = kingLoc_white;
  } else {
    kingLoc = kingLoc_black;
  }

  let x = unit.location[1];
  let y = unit.location[0];


  for (let i = 1; i < 8; i++) { // diagonal right down

    let a = i + 1;

    
    if (board[x + i][y + i].team !== unit.team) {
      diagonalRightDown_locations.push([x + i, y + i]);
    }
    if (board[x + a][y + a].location === kingLoc) {
      if (diagonalRightDown_locations.length === 1) {
        board[diagonalRightDown_locations[0][0]][diagonalRightDown_locations[0][1]].canMove = false;
      }
    }

    /////////////////////////////////////////////////

    if (board[x - i][y + i].team !== unit.team) {
      diagonalRightUp_locations.push([x - i, y + i]);
    }
    if (board[x - a][y + a].location === kingLoc) { // diagonal right up
      
      if (diagonalRightUp_locations.length === 1) {
        board[diagonalRightUp_locations[0][0]][diagonalRightUp_locations[0][1]].canMove = false;
      }
    }

    /////////////////////////////////////////////////

    if (board[x + i][y - i].team !== unit.team) {
      diagonalLeftDown_locations.push([x + i, y - i]);
    }

    if (board[x + a][y - a].location === kingLoc) { // diagonal left down
      
      if (diagonalLeftDown_locations.length === 1) {
        board[diagonalLeftDown_locations[0][0]][diagonalLeftDown_locations[0][1]].canMove = false;
      }
    }

    /////////////////////////////////////////////////

    if (board[x - i][y - i].team !== unit.team) {
      diagonalLeftUp_locations.push([x - i, y - i]);
    }
    if (board[x - a][y - a].location === kingLoc) { // diagonal left up

      if (diagonalLeftUp_locations.length === 1) {
        board[diagonalLeftUp_locations[0][0]][diagonalLeftUp_locations[0][1]].canMove = false;
      }
    }

  }
}

export function getKingLoc(board, team) {
  { }

  if (team === "black") {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (board[i][j].type === "king" && board[i][j].team === "black") {
          kingLoc_black = [i, j];
        }
      }
    }
  } else {

    for (let j = 0; j < 8; j++) {
      if (board[i][j].type === "king" && board[i][j].team === "white") {
        kingLoc_white = [i, j];
      }
    }
  }

}

