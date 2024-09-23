import ChessCell from "./ChessCell";
import Profile from "./Profile";
import GetTime from "./ClientEngine";

const CELL_COUNT = 64;

function ChessBoard(props) {
  const maxSize = props.maxSize;
  const minSize = props.minSize;

  return (
    <div id="chessboard_total">
      <div
        style={{
          display: "flex",
          flex: 3,
          gap: "1vmin",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "800px",
            minWidth: minSize,
            maxWidth: maxSize,
            boxSizing: "border-box",
          }}
        >
          <Profile
            type="opponent"
            username="OpponentName"
            size="4vmin"
          ></Profile>
          <div
            style={{
              display: "flex",
              flex: "1",
              boxSizing: "border-box",
              justifyContent: "right",
            }}
          >
            <GetTime></GetTime>
          </div>
        </div>
        <div
          key="chessboard_raw"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "stretch",
            flexDirection: "row",
            flexWrap: "wrap",
            border: "0.5vmin solid black",
            height: "85vmin",
            width: "85vmin",
            maxWidth: maxSize,
            maxHeight: maxSize,
            minWidth: minSize,
            minHeight: minSize,
            aspectRatio: "1 / 1",
            boxSizing: "border-box",
          }}
        >
          {[...Array(CELL_COUNT)].map((e, i) => {
            const col = i % 8;
            const row = Math.floor(i / 8);

            let letter = "a";
            switch (col) {
              case 0:
                letter = "a";
                break;
              case 1:
                letter = "b";
                break;
              case 2:
                letter = "c";
                break;
              case 3:
                letter = "d";
                break;
              case 4:
                letter = "e";
                break;
              case 5:
                letter = "f";
                break;
              case 6:
                letter = "g";
                break;
              case 7:
                letter = "h";
                break;
              default:
                console.log("Could not get letter");
                break;
            }

            const color_ = (col + row) % 2 === 0 ? "#5484b3" : "#37597a";
            const key = letter + (col + 1);

            return (
              <ChessCell
                key={key}
                color={color_}
                row={row}
                col={col}
                letter={letter}
              ></ChessCell>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "800px",
            minWidth: minSize,
            maxWidth: maxSize,
            boxSizing: "border-box",
          }}
        >
          <Profile type="player" username="PlayerName" size="4vmin"></Profile>
          <div
            style={{
              display: "flex",
              flex: "1",
              justifyContent: "right",
              boxSizing: "border-box",
            }}
          >
            <GetTime></GetTime>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChessBoard;
