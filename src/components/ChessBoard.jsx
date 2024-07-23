import ChessCell from "./ChessCell";

const CELL_COUNT = 64;

function ChessTable() {
  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "40vw",
      width: "40vw",
    }}>
    <>
      <div
        id="letters"
        style={{
          display: "flex",
          flexDirection: "row",
          letterSpacing: "2.8vw",
          fontFamily: "Arial",
          fontSize: "1.2vw",
          fontWeight: "bolder",
          alignItems: "center",
          justifyContent: "space-around",
          writingMode: "vertical-lr",
          textOrientation: "upright",
          transform: "translate(1.2vw, 1.5vw)",
        }}
      >
        <h3 style={{color: "#5484b3"}}>A</h3>
        <h3 style={{color: "#5484b3"}}>B</h3>
        <h3 style={{color: "#5484b3"}}>C</h3>
        <h3 style={{color: "#5484b3"}}>D</h3>
        <h3 style={{color: "#5484b3"}}>E</h3>
        <h3 style={{color: "#5484b3"}}>F</h3>
        <h3 style={{color: "#5484b3"}}>G</h3>
        <h3 style={{color: "#5484b3"}}>H</h3>
      </div>
      <div style={{
        
        height: "40vw",
        width: "40vw",
      }}>
        <div
          id="numbers"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            fontSize: "1vw",
            letterSpacing: "0.8vw",
            fontFamily: "Arial",
            fontSize: "1.2vw",
            fontWeight: "bolder",
            alignItems: "center",
            justifyContent: "space-around",
            writingMode: "vertical-lr",
            textOrientation: "upright",
            transform: "translate(0vw, 0.6vw)",
          }}
        >
          <h3 style={{color: "#5484b3"}}>1</h3>
          <h3 style={{color: "#5484b3"}}>2</h3>
          <h3 style={{color: "#5484b3"}}>3</h3>
          <h3 style={{color: "#5484b3"}}>4</h3>
          <h3 style={{color: "#5484b3"}}>5</h3>
          <h3 style={{color: "#5484b3"}}>6</h3>
          <h3 style={{color: "#5484b3"}}>7</h3>
          <h3 style={{color: "#5484b3"}}>8</h3>
        </div>
        <div
          id="cellContainer"
          style={{
            position: "relative",
            zIndex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            flex: 1,
            border: "0.25vw solid black",
          }}>
          {[...Array(CELL_COUNT)].map((e, i) => {
            const col = i % 8;
            const row = Math.floor(i / 8);

            const color_ = (col + row) % 2 === 0 ? "#5484b3" : "#37597a";

            return <ChessCell color={color_} row={row} col={col}></ChessCell>;
          })}
        </div>
      </div>
    </>
    </div>
  );
}

export default ChessTable;
