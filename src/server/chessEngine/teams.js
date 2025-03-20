import { Bishop, King, Knight, Pawn, Queen, Rook } from "./types";

export class TEAM_BLACK{

    enemy; // Initialized in game mode

    pieces =  // 2 Rooks, 2 Knights, 2 Bishops, 1 King, 1 Queen, 8 Pawns (can be overriden in game mode)
    [new Rook, new Rook,
        new Knight, new Knight,
        new Bishop, new Bishop,
        new King,
        new Queen,
        new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn,]


    color = "#000000"; // Used in front-end
}



export class TEAM_WHITE{

    enemy;
    
    pieces = 
    [new Rook, new Rook,
        new Knight, new Knight,
        new Bishop, new Bishop,
        new King,
        new Queen,
        new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn, new Pawn,]

    color = "#FFFFFF";

}

