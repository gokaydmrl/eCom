import React, { PropsWithChildren, useContext } from "react";
import { IThemeContext, ThemeContext } from "../context/ThemeContext";

const MainParentComponent: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useContext<IThemeContext>(ThemeContext);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0",
        backgroundColor: theme.theme === "light" ? "white" : "black",
        color: theme.theme === "light" ? "black" : "white",
      }}>
      {children}
    </div>
  );
};

export default MainParentComponent;
