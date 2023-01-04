import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { IThemeContext, ThemeContext } from "../context/ThemeContext";
const ThemeCon: React.FC<PropsWithChildren> = ({ children }) => {
  //  const [userCon, setUserCon] = useState(useContext(UserContext));
  const [theme, setTheme] = useState("light");
  console.log("this usercon", ThemeContext.Provider);
  // const { theme, settheme } = useContext(UserContext);
  console.log("userLogged.theme", theme);
  // const x = settheme(true);
  // console.log("x", x);

  const value: IThemeContext = { theme, setTheme };

  return (
    <div>
      <ThemeContext.Provider value={value}>
        {children}
        {/* <div>{isLogged ? "true" : "false"}</div>
        <button
          onClick={() => {
            return setIsLogged(true);
          }}>
          bas
        </button> */}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeCon;
