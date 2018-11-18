import React from "react";
import { ThemeProvider } from "styled-components";

export const myTheme = {
  font: {
    size: "17px",
    family: "Helvetica",
    weight: "normal"
  },
  color: {
    default: "black",
    button: "red"
  },
  button: {
    border: "1px solid red",
    background: "black"
  }
};

const MyThemeComponent = ({ children, theme }) => (
  <ThemeProvider theme={{ ...myTheme, ...theme }}>
    <div>{children}</div>
  </ThemeProvider>
);

export default MyThemeComponent;
