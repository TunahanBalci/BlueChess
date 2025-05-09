import { ChessBoard } from "../board";
import { Team, TEAM_BLACK, TEAM_WHITE } from "../teams";
import * as types from "../types";

const white = new TEAM_BLACK();
const black = new TEAM_WHITE();

white.enemies = { black };
black.enemies = { white };

const teams = [white, black];

const tiles = new Map();
const pieces = new Map();

initialize(teams, tiles, pieces);

const board = new ChessBoard(8, 8, teams, tiles, pieces);


function initialize(teams, tiles, pieces) {

  tiles.map((tile) => {
    tiles.set(tile, null);
  })


  teams[0].pieces.map((piece) => {
    // white

    if (piece instanceof types.Pawn) {
      for (i = 0; i < 8; i++) {
        piece.x = i;
        piece.y = 6;
        tiles.set(`${piece.x},6`, piece);
        pieces.set(piece, `${piece.x},6`);
      }
    }
    if (piece instanceof types.Rook) {
      piece.x = 0;
      piece.y = 7;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
    if (piece instanceof types.Knight) {
      piece.x = 1;
      piece.y = 7;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
    if (piece instanceof types.Bishop) {
      piece.x = 2;
      piece.y = 7;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
    if (piece instanceof types.Queen) {
      piece.x = 3;
      piece.y = 7;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
    if (piece instanceof types.King) {
      piece.x = 4;
      piece.y = 7;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
  });

  teams[1].pieces.map((piece) => {
    // black

    if (piece instanceof types.Pawn) {
      for (i = 0; i < 8; i++) {
        piece.x = i;
        piece.y = 1;
        tiles.set(`${piece.x},6`, piece);
        pieces.set(piece, `${piece.x},6`);
      }
    }
    if (piece instanceof types.Rook) {
      piece.x = 0;
      piece.y = 0;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
    if (piece instanceof types.Knight) {
      piece.x = 1;
      piece.y = 0;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
    if (piece instanceof types.Bishop) {
      piece.x = 2;
      piece.y = 0;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
    if (piece instanceof types.Queen) {
      piece.x = 3;
      piece.y = 0;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
    if (piece instanceof types.King) {
      piece.x = 4;
      piece.y = 0;
      tiles.set(`${piece.x},7`, piece);
      pieces.set(piece, `${piece.x},7`);
    }
  });
}
