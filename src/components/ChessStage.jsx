import ChessBoard from "./ChessBoard";

function ChessStage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        aspectRatio: 1 / 8,
        background: "#262b36",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "clamp(30vw, 40vw, 50vw)",
          width: "clamp(30vw, 40vw, 50vw)",
        }}
      >
        <ChessBoard
          ref={(el) => {
            if (!el) return;
            console.log(el.getBoundingClientRect().width);
          }}
        ></ChessBoard>
      </div>
    </div>
  );
}

export default ChessStage;
