// type : "pawn", "rook", "knight", "bishop", "queen", "king"
// pattern : array of [x, y] coordinates that represent the movement pattern of the piece
// repetitive : boolean that represents if the piece can move multiple squares in the same direction

export class Piece {

    tile; // tile that the piece is on
    
  constructor() {
    this.isBlocked = false; // boolean that represents if the piece is blocked by another piece
  }

  canMove(x, y) {
    // x , y => coordinates of the tile to move to
    // check if piece is blocked
    // check if piece is preventing check
    // check if x y is in moving pattern
  }

  getTiles(sizeX, sizeY) {
    this.pattern.map((set) => {
      if (this.repetitive) {

        set.map((coords) => {
          for (let i = 1; i < Math.max(sizeX, sizeY); i++) {
            let x = this.x + coords[0] * i;
            let y = this.y + coords[1] * i;
            if (x >= 0 && x < sizeX && y >= 0 && y < sizeY) { // check if tile is in bounds
              // check if tile is empty or occupied by opponent
              // check if tile is blocked by own piece
              // check if tile is preventing check
            } else {
              break; // stop checking if out of bounds
            }

          }
        });
      } else {
        let x = this.x + set[0];
        let y = this.y + set[1];
        if (x >= 0 && x < size && y >= 0 && y < size) {
          // check if tile is empty or occupied by opponent
          // check if tile is blocked by own piece
          // check if tile is preventing check
        }
      }
    });
  }

  getValidTiles(sizeX, sizeY){

  }
}
export class Bishop extends Piece {
  constructor() {
    this.pattern = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];
    this.repetitive = true;
  }
}

export class Knight extends Piece {
  constructor() {
    this.pattern = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];
    this.repetitive = false;
  }
}

export class King extends Piece {
  constructor() {
    this.pattern = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    this.repetitive = false;
  }
}

export class Queen extends Piece {
  constructor() {
    this.pattern = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    this.repetitive = true;
  }
}

export class Rook extends Piece {
  constructor() {
    this.pattern = [
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ];
    this.repetitive = true;
  }
}

export class Pawn extends Piece {
  constructor() {
    this.pattern = [[1, 0]];
    this.repetitive = false;
  }
}
