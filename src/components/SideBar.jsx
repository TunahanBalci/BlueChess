import React from "react";
import { useState, useEffect } from "react";
import icon_user from "./assets/icon_user.png";
import { CustomColors } from "./Utils";
import "./styles.css";

export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function SideBar(props) {
  const minSize = props.minSize;
  const maxSize = props.maxSize;
  const type = props.type;
  const dimension = props.dimension;

  if (dimension === "v") {
    if (type === "navigator") {
      return (
        <div
          key="sidebar_navigator"
          style={{
            height: "50px",
            maxWidth: "maxSize",
            minWidth: "minSize",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "1.2vmin",
            background: "#424657",
            color: "#2d283b",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        ></div>
      );
    } else {
      return (
        <div
          key="sidebar"
          style={{
            height: "200px",
            maxWidth: "maxSize",
            minWidth: "minSize",
            width: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Arial",
            fontWeight: "bolder",
            fontSize: "16px",
            background: "#424657",
            color: "#2d283b",
            flexDirection: "column",
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
            transform: "translate(0, 100px)",
            boxSizing: "border-box",
          }}
        >
          <Profile size="8vmin"></Profile>
          <div
            style={{
              clipPath:
                "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
              border: "1px solid black",
              width: "5vw",
              height: "5vw",
            }}
          ></div>
        </div>
      );
    }
  }
  if (type === "navigator") {
    return (
      <div
        key="sidebar_navigator"
        style={{
          boxSizing: "border-box",
          height: "100vh",
          maxWidth: "maxSize",
          minWidth: "minSize",
          width: "5vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
          fontWeight: "bolder",
          fontSize: "1.2vmin",
          background: "#424657",
          color: "#2d283b",
          flexDirection: "column",
        }}
      ></div>
    );
  } else {
    return (
      <div
        key="sidebar"
        style={{
          display: "flex",
          height: "95vh",
          maxWidth: maxSize,
          minWidth: minSize,
          width: "20vw",
          justifyContent: "center",
          fontFamily: "Arial",
          fontWeight: "bolder",
          fontSize: "1.2vmin",
          background: "#424657",
          color: "#2d283b",
          flexDirection: "column",
          borderTopLeftRadius: "2vmin",
          borderBottomLeftRadius: "2vmin",
          boxSizing: "border-box",
        }}
      >
        <div
          id="sidebar_profile"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: "100px",
            marginRight: "0",
          }}
        >
          <Profile size="120px"></Profile>
        </div>
        <div
          id="sidebar_chatbox"
          style={{
            display: "flex",
            marginLeft: "2vw",
            marginRight: "2vw",
            marginTop: "6vh",
            marginBottom: "4vh",
            border: "2px solid " + CustomColors("light"),
            minHeight: "25vh",
            background: "black",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            flexDirection: "column-reverse",
            borderRadius: "10px",
          }}
        >
          <div
            id="sidebar_chatbox_logo"
            style={{
              display: "flex",
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
              background: CustomColors("light"),
              marginLeft: "auto",
              marginBottom: "auto",
              marginTop: "15px",
              marginRight: "15px",
              width: "40px",
              height: "40px",
              border: "1px solid " + CustomColors("light"),
              boxSizing: "border-box",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              order: 2,
            }}
          ></div>
          <div
            id="sidebar_chatbox_msgbar"
            style={{
              display: "flex",
              height: "3vh",
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-start",
              borderTop: "2px solid " + CustomColors("light"),
              boxSizing: "border-box",
              flexDirection: "row",
            }}
          >
            <div
              id="sidebar_chatbox_msgbar_pointer"
              className="indicator_blink"
            ></div>
          </div>
        </div>

        <div
          id="sidebar_bottom_panel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
            order: 2,
            marginTop: "auto",
            marginBottom: "4vmin",
            gap: "3vmin",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              border: "0.4vmin solid " + CustomColors("background_dark"),
              paddingLeft: "6vw",
              paddingRight: "6vw",
              paddingTop: "1.4vmin",
              paddingBottom: "1.4vmin",
              borderRadius: "2vmin",
              background:
                "linear-gradient(to bottom, " +
                CustomColors("light") +
                " 0%, " +
                CustomColors("light") +
                " 80%, " +
                "#6a7191" +
                " 80%, " +
                "#6a7191" +
                " 100%)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                clipPath:
                  "polygon(84% 100%, 63% 100%, 62% 65%, 41% 63%, 40% 100%, 19% 100%, 15% 43%, 0 41%, 52% 0, 100% 40%, 82% 40%)",
                border: "1px solid black",
                width: "50px",
                height: "50px",
                background: CustomColors("background_dark"),
                boxSizing: "border-box",
              }}
            ></div>
            <div
              style={{
                clipPath:
                  "polygon(84% 100%, 63% 100%, 62% 65%, 41% 63%, 40% 100%, 19% 100%, 15% 43%, 0 41%, 52% 0, 100% 40%, 82% 40%)",
                display: "flex",
              }}
            ></div>
          </div>
          <header
            style={{
              display: "flex",
              color: "#8c95bf",
              fontWeight: "bolder",
              fontSize: "16px",
              fontFamily: "Arial",
              boxSizing: "border-box",
              marginLeft: "1vw",
              marginRight: "1vw",
            }}
          >
            Return to Main Menu
          </header>
        </div>
      </div>
    );
  }
}

function Profile(props) {
  const size = props.size;
  return (
    <img
      src={icon_user}
      alt="Profile Page"
      style={{
        height: size,
        width: size,
        margin: "1vmin",
        boxSizing: "border-box",
      }}
    ></img>
  );
}

export default SideBar;
