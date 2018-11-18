import React from "react";
import ReactDOM from "react-dom";
import Paragraph from "./atoms/text/Paragraph.jsx";
import Button from "./atoms/button/Button.jsx";
import DarkCTA from "./molecules/DarkCTA.jsx";
import MyThemeComponent from "./theme/MyThemeComponent.jsx";

function App() {
  return (
    <div className="App">
      <MyThemeComponent>
        <Paragraph>Normal Theme Text</Paragraph>
        <Button>Button!</Button>
        <DarkCTA />
      </MyThemeComponent>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
