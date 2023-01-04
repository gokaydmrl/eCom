import React, { useContext } from "react";
import "../App.css";
import { IThemeContext, ThemeContext } from "../context/ThemeContext";
const Footer = () => {
  const tema = useContext<IThemeContext>(ThemeContext);
  console.log(tema);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
      <div className="footer">
        Footer
        <button
          onClick={() =>
            tema.setTheme((th) => {
              return th === "light" ? "dark" : "light";
            })
          }>
          baaaaas
        </button>{" "}
      </div>
    </div>
  );
};

export default Footer;
