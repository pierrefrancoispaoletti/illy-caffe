export const placeLocation = "illy";
export let serverURI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://young-badlands-89715.herokuapp.com";

export const colors = {
  main: "#fdfdfd", //white
  secondary: "#fe0000", //red
};
