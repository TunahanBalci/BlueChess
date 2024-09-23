import ChessBoard from "./ChessBoard";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import { CustomColors } from "./Utils";

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

function ChessStage() {
  const { height, width } = useWindowDimensions();

  if (width / height <= 1.2) {
    return (
      <div
        style={{
          background: CustomColors("background_dark"),
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflowX: "auto",
          overflowY: "auto",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <SideBar type="navigator" dimension="v"></SideBar>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: "50px",
            boxSizing: "border-box",
          }}
        >
          <ChessBoard minSize="256px" maxSize="85vmin"></ChessBoard>
        </div>

        <SideBar dimension="v"></SideBar>
      </div>
    );
  }
  return (
    <div
      style={{
        background: CustomColors("background_dark"),
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        overflowY: "auto",
        overflowX: "auto",
        alignItems: "flex-start",
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      <SideBar type="navigator"></SideBar>
      <div
        style={{
          display: "flex",
          flexShrink: 1,
          marginLeft: "5vmin",
          marginRight: "5vmin",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <ChessBoard minSize="256px" maxSize="85vmin"></ChessBoard>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100vh",
          width: "100vw",
          marginLeft: "auto",
          boxSizing: "border-box",
        }}
      >
        <SideBar></SideBar>
      </div>
    </div>
  );
}

export default ChessStage;
