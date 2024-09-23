import { CustomColors } from "./Utils";

function ChessCell(props) {
  const color = props.color;

  if (color === CustomColors("light_blue")) {
  }
    return (
      <div
        style={{
          display: "flex",
          flex: "1 1 calc(100% / 8)",
          background: color,
          aspectRatio: 1 / 1,
          boxSizing: "border-box",
        }}
      ></div>
    );
}

export default ChessCell;
