import { createContext } from "react";

export const backgroundColors = {

};

export const BackgroundColorContext = createContext({
  color: backgroundColors.dark,
  changeColor: (color) => {},
});
