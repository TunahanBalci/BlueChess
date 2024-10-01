export function GetTime(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        fontWeight: "bolder",
        fontSize: "3vmin",
        height: "5vmin",
        width: "20vmin",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: "1vmin",
        background: "#424657",
        color: "#8c95bf",
      }}
    >
      9m 59s
    </div>
  );
}

export function preview(props){

  let location = props.location; // where the preview will be
  let unit = props.unit;
  
  return (
    <div id="preview" style={{

    }}>
          {[...Array(CELL_COUNT)].map((e, i) => {
            if (i === unit.location[0] * Math.sqrt(CELL_COUNT) + unit.location[1])
            return (<previewCell key={i} location={i} />); ;
            })}
</div>
  )
}

export default GetTime;

export function previewCell(props){


  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80%",
      width: "80%",
      boxSizing: "border-box",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.5)",
      border: "1px solid black",
    }}>
      {props.location}
    </div>
  )
}

function gamePrep(props) {}
