import pawn_b from "./assets/pawn_black.png";
import pawn_w from "./assets/pawn_white.png";
import knight_b from "./assets/knight_black.png";
import knight_w from "./assets/knight_white.png";
import bishop_b from "./assets/bishop_black.png";
import bishop_w from "./assets/bishop_white.png";
import rook_b from "./assets/rook_black.png";
import rook_w from "./assets/rook_white.png";
import queen_b from "./assets/queen_black.png";
import queen_w from "./assets/queen_white.png";
import king_b from "./assets/king_black.png";
import king_w from "./assets/king_white.png";
// 0 : pawn - 8
// 1 : bishop - 2
// 2 : knight - 2
// 3 : rook - 2
// 4 : queen - 1
// 5 : king - 1

function ChessPiece(props) {


  super(props);
  this.type = props.type;
  this.team = props.team; // black - white
  this.location = props.location; // array [row, col]

  let imgSource;

  switch (type) { // assign front-end image based on piece type
    case "0":
      imgSource = team === "white" ? pawn_w : pawn_b;
      break;
    case "1":
      imgSource = team === "white" ? bishop_w : bishop_b;
      break;
    case "2":
      imgSource = team === "white" ? knight_w : knight_b;
      break;
    case "3":
      imgSource = team === "white" ? rook_w : rook_b;
      break;
    case "4":
      imgSource = team === "white" ? queen_w : queen_b;
      break;
    case "5":
      imgSource = team === "white" ? king_w : king_b;
      break;
    default:
      console.log("Invalid piece type");
      break;
  }

  return (
    <div
      style={{
        display: "flex",
        flex: 8,
        boxSizing: "border-box",
      }}
    >
      <img src={imgSource} alt="chess piece" />
    </div>
  );
}
export default ChessPiece;
