function ChessCell(props) {
  const color = props.color;
  const row = props.row;
  const col = props.col;

  return (
    <div
      style={{
        display: "flex",
        flex: "1 1 calc(100% / 8)",
        background: color,
        aspectRatio: 1 / 1,
      }}
    ></div>
  );
}

export default ChessCell;
