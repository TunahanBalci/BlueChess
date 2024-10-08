export default function ChessUnit(type, team, location) {
  this.type = type;
  this.team = team;
  this.location = location;
  this.canMove = true;
  
  this.possibleMoves = new Array(8);
  for (let i = 0; i < 8; i++) {
    this.possibleMoves[i] = new Array(8);
  }

  this.protectedPieces = [];
  this.isProtected = false;
}
