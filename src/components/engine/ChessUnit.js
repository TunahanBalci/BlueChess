export default function ChessUnit(type, team, location) {
  this.type = type;
  this.team = team;
  this.location = location;
  this.canMove = true;
  this.possibleMoves = [8][8];
  this.protectedPieces = [];
}
