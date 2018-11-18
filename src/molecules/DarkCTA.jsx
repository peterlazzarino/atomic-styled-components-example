import React from "react";
import DarkTheme from "../theme/DarkTheme";
import Button from "../atoms/button/Button";
import Paragraph from "../atoms/text/Paragraph";

const DarkCTA = ({ children }) => (
  <DarkTheme>
    <Paragraph>Dark Theme Text!</Paragraph>
    <Button>Dark Theme Button!</Button>
  </DarkTheme>
);

export default DarkCTA;
