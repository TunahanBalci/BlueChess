export class ChessBoard {
  constructor(sizeX, sizeY, teams, tiles, pieces) {
    this.teams = teams;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.tiles = tiles;
    this.pieces = pieces;
  }
}


function movePiece(piece, x, y) {


  // check if piece can move to x y

  if (!canMove(piece, x, y)) return;

  tiles.set(`${piece.x},${piece.y}`, null); // remove piece from old tile
  tiles.set(`${x},${y}`, piece); // add piece to new tile
  pieces.set(piece, `${x},${y}`); // update piece position
  piece.x = x; // update piece x position
  piece.y = y; // update piece y position



  // update tiles
  // update pieces
  // update piece position
}

function canMove(piece, x, y){

  // check if piece is blocked
  // check if piece is preventing check
  // check if x y is in moving pattern
}