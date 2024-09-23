import icon_user from "./assets/icon_user.png";

function Profile(props) {
  const type = props.type;
  const username = props.username;
  const size = props.size;
  const scale = props.scale;

  if (type === "player") {
    return (
      <div
        style={{
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right",
          gap: "1vmin",
          boxSizing: "border-box",
        }}
      >
        <img
          src={icon_user}
          alt="Profile Page"
          style={{
            height: size,
            width: size,
            boxSizing: "border-box",
          }}
        ></img>
        <header
          style={{
            fontFamily: "Arial",
            fontSize: "3vmin",
            fontWeight: "bolder",
            color: "#8c95bf",
            boxSizing: "border-box",
          }}
        >
          {username} (you)
        </header>
      </div>
    );
  } else {
    return (
      <div
        style={{
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "right",
          gap: "1vmin",
          boxSizing: "border-box",
        }}
      >
        <img
          src={icon_user}
          alt="Profile Page"
          style={{
            height: size,
            width: size,
            scale: scale,
            boxSizing: "border-box",
          }}
        ></img>
        <header
          style={{
            fontFamily: "Arial",
            fontSize: "3vmin",
            fontWeight: "bolder",
            color: "#8c95bf",
            boxSizing: "border-box",
          }}
        >
          {username}
        </header>
      </div>
    );
  }
}

export default Profile;
