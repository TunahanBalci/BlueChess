// type : "pawn", "rook", "knight", "bishop", "queen", "king"
// pattern : array of [x, y] coordinates that represent the movement pattern of the piece
// repetitive : boolean that represents if the piece can move multiple squares in the same direction



export class Bishop {

    location;
    constructor() {
        this.pattern = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        this.repetitive = true;
    }
}

export class Knight {

    location;
    constructor() {
        this.pattern = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
        this.repetitive = false;
    }
}

export class King {

    location;
    constructor() {
        this.pattern = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        this.repetitive = false;
    }
}

export class Queen {

    location;
    constructor() {
        this.pattern = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        this.repetitive = true;
    }
}


export class Rook {

    location;
    constructor() {
        this.pattern = [[-1, 0], [0, -1], [0, 1], [1, 0]];
        this.repetitive = true;
    }
}

export class Pawn {

    location;
    constructor() {
        this.pattern = [[1, 0]];
        this.repetitive = false;
    }
}


export function getFullPattern(piece, board, location){

    let pattern = []; 


    for (let i = 0; i < _sizeX; i++){

        piece.pattern.forEach(element => {
            let temp = [];
            temp.push(element[0] * i);
            temp.push(element[1] * i);
        });
    }

    function 

    return pattern;
}