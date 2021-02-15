import React, { useState, useEffect } from "react";
import {
  BackgroundColorContext,
  backgroundColors,
} from "contexts/BackgroundColorContext";

export default function BackgroundColorWrapper(props) {
  const [color, setColor] = useState(
      () =>
        JSON.parse(localStorage.getItem('theme-color')) || backgroundColors.blue
  );

  function changeColor(color) {
    setColor(color);
  }

  useEffect(() => {
      // Persist the theme-color using the browser's localStorage.
      localStorage.setItem('theme-color', JSON.stringify(color))
  }, [color])

  return (
    <BackgroundColorContext.Provider
      value={{ color: color, changeColor: changeColor }}
    >
      {props.children}
    </BackgroundColorContext.Provider>
  );
}
