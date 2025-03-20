export class ChessBoard {
  constructor(sizeX, sizeY, pieces) {
    this.pieces = pieces; // array
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.tiles = initTiles(this);
  }

  push(piece) {
    this.pieces.push(piece);
  }

  getPieceLocation(piece) {
    if (piece in this.pieces) {
      this.tiles.forEach((element) => {
        if (element.piece == piece) {
          return [element.x, element.y];
        }
      });
    } else {
      console.error("Could not get piece location in chess board");
    }
  }

}

function initTiles(board) {
  let tiles = [];

  for (let i = 0; i < board.sizeX; i++) {
    for (let j = 0; j < board.sizeY; j++) {
      let tile = new Tile(i, j);
      tiles.push(tile);
    }
  }
  return tiles;
}



class Tile {
  piece;
  x;
  y;

  Tile(x, y) {
    this.x = x;
    this.y = y;
  }
}
