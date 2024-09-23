export const CustomColors = (props) => {
  const color = props;

  switch (color) {
    case "background_dark":
      return "#1e2130";
    case "light_blue":
      return "#5484b3";
    case "dark_blue":
      return "#37597a";
    case "light":
      return "#8c95bf";
    case "background_light":
      return "#424657";
    default:
      console.log("Could not get color");
      break;
  }
  return "#FFFFFF";
};
