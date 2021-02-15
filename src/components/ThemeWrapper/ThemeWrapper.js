import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "contexts/ThemeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(
      () => JSON.parse(localStorage.getItem('theme-mode')) || themes.dark
  );

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    // Persist the theme-mode using the browser's localStorage.
    localStorage.setItem('theme-mode', JSON.stringify(theme))
    switch (theme) {
      case themes.light:
        document.body.classList.add("white-content");
        break;
      case themes.dark:
      default:
        document.body.classList.remove("white-content");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
