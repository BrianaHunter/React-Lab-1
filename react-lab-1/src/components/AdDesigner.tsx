import "./AdDesigner.css";
import { useState } from "react";

export function AdDesigner() {
  const [buttonFlavor, setButtonFlavor] = useState("");
  const [colorTheme, setColorTheme] = useState(true);
  const [fontSizePx, setFontSize] = useState(20);

  const fontPx = { fontSize: fontSizePx + "px" };

  let colorClass = "";

  if (colorTheme === true) {
    colorClass = "dark-mode";
  }

  const increaseFont = () => {
    setFontSize(fontSizePx + 1);
  };

  const decreaseFont = () => {
    setFontSize(fontSizePx - 1);
  };

  return (
    <div>
      <h1 className="AdDesigner-Header">AdDesigner</h1>

      <div className={"vote-box " + colorClass}>
        <h4 className="vote-for">Vote for</h4>
        <h1 style={fontPx} className={"flavor-font"}>
          {buttonFlavor}
        </h1>
      </div>

      <div>
        <h4>What to Support</h4>
        <button onClick={() => setButtonFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setButtonFlavor("Vanilla")}>Vanilla</button>
        <button onClick={() => setButtonFlavor("Strawberry")}>
          Strawberry
        </button>
      </div>

      <div>
        <h4>Color Theme</h4>
        <button onClick={() => setColorTheme(false)}>Light</button>
        <button onClick={() => setColorTheme(true)}>Dark</button>
      </div>

      <div>
        <h4>Font Size</h4>

        <button onClick={decreaseFont}>Down</button>
        {fontSizePx}
        <button onClick={increaseFont}>Up</button>
      </div>
    </div>
  );
}

export default AdDesigner;
