// https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome

import React, { useCallback, useEffect, useState, useRef } from "react";
import Header from "./Header";
import Name from "./Name";
import ColorPicker from "./ColorPicker";
import useWindowSize from "./WindowSize";
import RefreshButton from "./RefreshButton";
import Canvas from "./Canvas";
import randomColor from "randomcolor";
import "../App.css";

function Paint() {
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);

  const getColors = useCallback(() => {
    const baseColor = randomColor().slice(1);
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then((response) => response.json())
      .then((data) => {
        setColors(data.colors.map((color) => color.hex.value));
        setActiveColor(data.colors[0].hex.value);
      });
  }, []);

  useEffect(getColors, []);
  
//   the width * height logic using custom hooks
  const [visible, setVisible] = useState(false);
  let timeoutId = useRef();
  const [windowWidth, windowHeight] = useWindowSize(() => {
    setVisible(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => setVisible(false), 500);
  });
  
  const nameRef = useRef({value:"Unititled"});

  return (
    <div>
      <Header color={activeColor} />
      <Name nameRef={nameRef} />
      <div>
        <ColorPicker
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <RefreshButton cb={getColors} />
      </div>
      <Canvas
        project_name={nameRef}
        activeColor={activeColor}
        height={window.innerHeight}
        width={window.innerWidth}
      />
      <div className={`window-size ${visible ? "" : "hidden"}`}>
        {windowWidth} x {windowHeight}
      </div>
    </div>
  );
}

export default Paint;
