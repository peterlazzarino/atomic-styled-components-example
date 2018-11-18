import React from "react";
import styled, { ThemeProvider } from "styled-components";
import MyThemeComponent, { myTheme } from "./MyThemeComponent";

const darkTheme = {
  color: {
    default: "white",
    button: "black"
  },
  button: {
    border: "1px solid black",
    background: "white"
  }
};

const DarkContainer = styled.div`
  background: black;
  padding: 20px;
`;

const DarkTheme = ({ children }) => (
  <DarkContainer>
    <MyThemeComponent theme={darkTheme}>{children}</MyThemeComponent>
  </DarkContainer>
);

export default DarkTheme;
