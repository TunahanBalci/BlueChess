import ChessUnit from "./ChessUnit";

let board = [8][8];

export default function ServerEngine() {}

export function initBoard() {
  for (let i = 0; i < 8; i++) {
    // fills the chessboard with chessUnit objects --> black at top, white at bottom
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
            let piece_0 = new ChessUnit("rook", "white", [i, j]);
            board[i][j] = piece_0;
            break;
          case 1:
            let piece_1 = new ChessUnitq("knight", "white", [i, j]);
            piece_1.possibleMoves.push([i + 2, j + 1]);
            piece_1.possibleMoves.push([i + 2, j - 1]);
            board[i][j] = piece_1;
            break;
          case 2:
            let piece_2 = new ChessPiece("bishop", "white", [i, j]);
            board[i][j] = piece_2;
            break;
          case 3:
            let piece_3 = new ChessPiece("queen", "white", [i, j]);
            piece_3.row = i;
            piece_3.col = j;
            board[i][j] = piece_3;
            break;
          case 4:
            let piece_4 = new ChessPiece("king", "white", [i, j]);
            piece_4.row = i;
            piece_4.col = j;
            board[i][j] = piece_4;
            break;
          case 5:
            let piece_5 = new ChessPiece("bishop", "white", [i, j]);
            piece_5.row = i;
            piece_5.col = j;
            board[i][j] = piece_5;
            break;
          case 6:
            let piece_6 = new ChessPiece("knight", "white", [i, j]);
            piece_1.possibleMoves.push([i + 2, j + 1]);
            piece_1.possibleMoves.push([i + 2, j - 1]);
            piece_6.row = i;
            piece_6.col = j;
            board[i][j] = piece_6;
            break;
          case 7:
            let piece_7 = new ChessPiece("rook", "white", [i, j]);
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

export function previewMove(piece) {
  // FRONTEND
  // called when clicked on a piece to view possible moves
}
export function moveUnit(unit, to) {
  // called when a piece is moved

  let from = unit.location;

  if (board[to[0]][to[1]] !== null) {
    takeUnit(unit, board[to[0]][to[1]]);
  } else {
    board[to[0]][to[1]] = unit;
    unit.location = to;
    board[from[0]][from[1]] = null;
  }

  switch (unit.type) {
  }
}

export function takeUnit(unit, target) {
  // called when a piece takes another piece

  if (unit.team === target.team) {
    return;
  } else if (unit.canMove === true) {
    if (unit.possibleMoves.includes(target.location)) {
      board[target.location[0]][target.location[1]] = unit;
      board[unit.location[0]][unit.location[1]] = null;

      unit.location = target.location;
      target.location = null;
      // add target to taken peices
    }
  }
}

export function exists(location) {
  // checks if a piece exists at a location

  try {
    if (
      board[location[0]][location[1]] === null ||
      board[location[0]][location[1]] !== null
    ) {
      return true;
    }
  } catch (e) {
    return false;
  }
}

export function calcPossible(unit) {
  switch (unit.type) {
    case "pawn":
      if (unit.team === "white") {
        if (unit.location[0] === 6) {
          unit.possibleMoves.push([unit.location[0] - 1, unit.location[1]]);
          unit.possibleMoves.push([unit.location[0] - 2, unit.location[1]]); // TODO: en passant
        } else {
          unit.possibleMoves.push([unit.location[0] - 1, unit.location[1]]);
        }

        if (unit.location[1] + 1 < 8 && unit.location[0] - 1 >= 0) {
          if (
            board[unit.location[0] - 1][unit.location[1] + 1] !== null &&
            board[unit.location[0] - 1][unit.location[1] + 1].team !== unit.team
          ) {
            unit.possibleMoves.push([
              unit.location[0] - 1,
              unit.location[1] + 1,
            ]);
          } else if (
            board[unit.location[0] - 1][unit.location[1] + 1] === null
          ) {
            unit.possibleMoves.push([
              unit.location[0] - 1,
              unit.location[1] + 1,
            ]);
          }
        } else if (unit.location[1] - 1 >= 0 && unit.location[0] - 1 >= 0) {
          if (
            board[unit.location[0] - 1][unit.location[1] - 1] !== null &&
            board[unit.location[0] - 1][unit.location[1] - 1].team !== unit.team
          ) {
            unit.possibleMoves.push([
              unit.location[0] - 1,
              unit.location[1] - 1,
            ]);
          } else if (
            board[unit.location[0] - 1][unit.location[1] - 1] === null
          ) {
            unit.possibleMoves.push([
              unit.location[0] - 1,
              unit.location[1] - 1,
            ]);
          }
        }
      } else {
        if (unit.location[0] === 1) {
          unit.possibleMoves.push([unit.location[0] + 1, unit.location[1]]);
          unit.possibleMoves.push([unit.location[0] + 2, unit.location[1]]);
        } else {
          unit.possibleMoves.push([unit.location[0] + 1, unit.location[1]]);
        }
        if (unit.location[1] + 1 < 8 && unit.location[0] + 1 < 8) {
          if (
            board[unit.location[0] + 1][unit.location[1] + 1] !== null &&
            board[unit.location[0] + 1][unit.location[1] + 1].team !== unit.team
          ) {
            unit.possibleMoves.push([
              unit.location[0] + 1,
              unit.location[1] + 1,
            ]);
          } else if (
            board[unit.location[0] + 1][unit.location[1] + 1] === null
          ) {
            unit.possibleMoves.push([
              unit.location[0] + 1,
              unit.location[1] + 1,
            ]);
          }
        } else if (unit.location[1] - 1 >= 0 && unit.location[0] + 1 < 8) {
          if (
            board[unit.location[0] + 1][unit.location[1] - 1] !== null &&
            board[unit.location[0] + 1][unit.location[1] - 1].team !== unit.team
          ) {
            unit.possibleMoves.push([
              unit.location[0] + 1,
              unit.location[1] - 1,
            ]);
          } else if (
            board[unit.location[0] + 1][unit.location[1] - 1] === null
          ) {
            unit.possibleMoves.push([
              unit.location[0] + 1,
              unit.location[1] - 1,
            ]);
          }
        }
      }
      break;

    case "rook":
      for (let i = unit.location[0]; i < 8; i++) {
        // towards down
        if (board[i][unit.location[1]] === null) {
          unit.possibleMoves.push([i, unit.location[1]]);
        } else if (board[i][unit.location[1]].team !== unit.team) {
          unit.possibleMoves.push([i, unit.location[1]]);
          break;
        }
      }
      for (let i = unit.location[1]; i < 8; i++) {
        // towards right
        if (board[unit.location[0]][i] === null) {
          unit.possibleMoves.push([unit.location[0], i]);
        } else if (board[unit.location[0]][i].team !== unit.team) {
          unit.possibleMoves.push([unit.location[0], i]);
          break;
        }
      }
      for (let i = unit.location[0]; i >= 0; i--) {
        // towards up

        if (board[i][unit.location[1]] === null) {
          unit.possibleMoves.push([i, unit.location[1]]);
        } else if (board[i][unit.location[1]].team !== unit.team) {
          unit.possibleMoves.push([i, unit.location[1]]);
          break;
        }
      }

      for (let i = unit.location[1]; i >= 0; i--) {
        // towards left
        if (board[unit.location[0]][i] === null) {
          unit.possibleMoves.push([unit.location[0], i]);
        } else if (board[unit.location[0]][i].team !== unit.team) {
          unit.possibleMoves.push([unit.location[0], i]);
          break;
        }
      }
      break;
    case "knight":
      if (unit.location[0] + 2 < 8 && unit.location[1] + 1 < 8) {
        // 2 down 1 right
        unit.possibleMoves.push([unit.location[0] + 2, unit.location[1] + 1]);
      } else if (unit.location[0] + 2 < 8 && unit.location[1] - 1 >= 0) {
        // 2 down 1 left
        unit.possibleMoves.push([unit.location[0] + 2, unit.location[1] - 1]);
      } else if (unit.location[0] - 2 >= 0 && unit.location[1] + 1 < 8) {
        // 2 up 1 right
        unit.possibleMoves.push([unit.location[0] - 2, unit.location[1] + 1]);
      } else if (unit.location[0] - 2 >= 0 && unit.location[1] - 1 >= 0) {
        // 2 up 1 left
        unit.possibleMoves.push([unit.location[0] - 2, unit.location[1] - 1]);
      } else if (unit.location[0] + 1 < 8 && unit.location[1] + 2 < 8) {
        // 1 down 2 right
        unit.possibleMoves.push([unit.location[0] + 1, unit.location[1] + 2]);
      } else if (unit.location[0] + 1 < 8 && unit.location[1] - 2 >= 0) {
        // 1 down 2 left
        unit.possibleMoves.push([unit.location[0] + 1, unit.location[1] - 2]);
      } else if (unit.location[0] - 1 >= 0 && unit.location[1] + 2 < 8) {
        // 1 up 2 right
        unit.possibleMoves.push([unit.location[0] - 1, unit.location[1] + 2]);
      } else if (unit.location[0] - 1 >= 0 && unit.location[1] - 2 >= 0) {
        // 1 up 2 left
        unit.possibleMoves.push([unit.location[0] - 1, unit.location[1] - 2]);
      }
      break;
    case "bishop":
      for (let i = 0; 1 < 8; i++) {
        // towards down right
        if (board[i][i] === null) {
          unit.possibleMoves.push([i, i]);
        } else if (board[i][i].team !== unit.team) {
          unit.possibleMoves.push([i, i]);
          break;
        }
      }

      for (let i = 7; i >= 0; i++) {
        // towards down left
        if (board[i][-i] === null) {
          unit.possibleMoves.push([i, -i]);
        } else if (board[i][-i].team !== unit.team) {
          unit.possibleMoves.push([i, -i]);
          break;
        }
      }
      for (let i = 7; i >= 0; i--) {
        // towards up right

        if (board[-i][i] === null) {
          unit.possibleMoves.push([-i, i]);
        } else if (board[-i][i].team !== unit.team) {
          unit.possibleMoves.push([-i, i]);
          break;
        }
      }
      for (let i = 7; i >= 0; i--) {
        // towards up left

        if (board[-i][-i] === null) {
          unit.possibleMoves.push([-i, -i]);
        } else if (board[-i][-i].team !== unit.team) {
          unit.possibleMoves.push([-i, -i]);
          break;
        }
      }
      break;
    case "queen":
      for (let i = unit.location[0]; i < 8; i++) {
        // towards up
        if (board[i][unit.location[1]] === null) {
          unit.possibleMoves.push([i, unit.location[1]]);
        } else if (board[i][unit.location[1]].team !== unit.team) {
          unit.possibleMoves.push([i, unit.location[1]]);
          break;
        }
      }
      for (let i = unit.location[1]; i < 8; i++) {
        // towards right
        if (board[unit.location[0]][i] === null) {
          unit.possibleMoves.push([unit.location[0], i]);
        } else if (board[unit.location[0]][i].team !== unit.team) {
          unit.possibleMoves.push([unit.location[0], i]);
          break;
        }
      }
      for (let i = unit.location[0]; i >= 0; i--) {
        // towards down

        if (board[i][unit.location[1]] === null) {
          unit.possibleMoves.push([i, unit.location[1]]);
        } else if (board[i][unit.location[1]].team !== unit.team) {
          unit.possibleMoves.push([i, unit.location[1]]);
          break;
        }
      }

      for (let i = unit.location[1]; i >= 0; i--) {
        // towards left
        if (board[unit.location[0]][i] === null) {
          unit.possibleMoves.push([unit.location[0], i]);
        } else if (board[unit.location[0]][i].team !== unit.team) {
          unit.possibleMoves.push([unit.location[0], i]);
          break;
        }
      }
      for (let i = 0; 1 < 8; i++) {
        // towards down right
        if (board[i][i] === null) {
          unit.possibleMoves.push([i, i]);
        } else if (board[i][i].team !== unit.team) {
          unit.possibleMoves.push([i, i]);
          break;
        }
      }

      for (let i = 7; i >= 0; i++) {
        // towards down left
        if (board[i][-i] === null) {
          unit.possibleMoves.push([i, -i]);
        } else if (board[i][-i].team !== unit.team) {
          unit.possibleMoves.push([i, -i]);
          break;
        }
      }
      for (let i = 7; i >= 0; i--) {
        // towards up right

        if (board[-i][i] === null) {
          unit.possibleMoves.push([-i, i]);
        } else if (board[-i][i].team !== unit.team) {
          unit.possibleMoves.push([-i, i]);
          break;
        }
      }
      for (let i = 7; i >= 0; i--) {
        // towards up left

        if (board[-i][-i] === null) {
          unit.possibleMoves.push([-i, -i]);
        } else if (board[-i][-i].team !== unit.team) {
          unit.possibleMoves.push([-i, -i]);
          break;
        }
      }
      break;
    case "king":
      function checkLoc(loc) {
        if (board[(loc[0], loc[1])] === null) {
          unit.possibleMoves.push(loc);
        }
      }
      break;
    default:
      break;
  }
}

export function checkProtected(unit) {
  switch (unit.type) {
    case "pawn":
      if (unit.team === "white") {
        if (unit.location[1] + 1 < 8 && unit.location[0] - 1 >= 0) {
          if (
            board[unit.location[0] - 1][unit.location[1] + 1] !== null &&
            board[unit.location[0] - 1][unit.location[1] + 1].team === unit.team
          ) {
            unit.protectedPieces.push(
              board[unit.location[0] - 1][unit.location[1] + 1]
            );
          } else if (
            board[unit.location[0] - 1][unit.location[1] - 1] !== null &&
            board[unit.location[0] - 1][unit.location[1] - 1].team === unit.team
          ) {
            unit.protectedPieces.push(
              board[unit.location[0] - 1][unit.location[1] - 1]
            );
          }
        }
      } else {
        if (unit.location[1] + 1 < 8 && unit.location[0] + 1 < 8) {
          if (
            board[unit.location[0] + 1][unit.location[1] + 1] !== null &&
            board[unit.location[0] + 1][unit.location[1] + 1].team === unit.team
          ) {
            unit.protectedPieces.push(
              board[unit.location[0] + 1][unit.location[1] + 1]
            );
          } else if (
            board[unit.location[0] + 1][unit.location[1] - 1] !== null &&
            board[unit.location[0] + 1][unit.location[1] - 1].team === unit.team
          ) {
            unit.protectedPieces.push(
              board[unit.location[0] + 1][unit.location[1] - 1]
            );
          }
        }
      }
      break;
    case "rook":
      for (let i = unit.location[0]; i < 8; i++) {
        // towards down
        if (board[i][unit.location[1]] !== null) {
          unit.protectedPieces.push(board[i][unit.location[1]]);
        }
      }
      for (let i = unit.location[1]; i < 8; i++) {
        // towards right
        if (board[unit.location[0]][i] !== null) {
          unit.protectedPieces.push(board[unit.location[0]][i]);
        }
      }
      for (let i = unit.location[0]; i >= 0; i--) {
        // towards up
        if (board[i][unit.location[1]] !== null) {
          unit.protectedPieces.push(board[i][unit.location[1]]);
        }
      }
      for (let i = unit.location[1]; i >= 0; i--) {
        // towards left
        if (board[unit.location[0]][i] !== null) {
          unit.protectedPieces.push(board[unit.location[0]][i]);
        }
      }
      break;
    case "knight":
      break;
    case "bishop":
      break;
    case "queen":
      break;
    case "king":
      break;
    default:
      break;
  }
}
