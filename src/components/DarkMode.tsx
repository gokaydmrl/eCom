import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import React, { PropsWithChildren, useContext, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IThemeContext, ThemeContext } from "../context/ThemeContext";
const DarkMode: React.FC<PropsWithChildren> = () => {
  const mod = useContext<IThemeContext>(ThemeContext);
  const [mode, setMode] = useState("light");
  return (
    <div
      style={{
        alignItems: "center",
        // backgroundColor: mod.theme === "light" ? "pink" : "grey",
        display: "flex",
        justifyContent: "end",
        right: "0",
        top: "0",
        color: mode === "light" ? "orange" : "blue",
      }}>
      <FormGroup aria-label="position" row>
        <Switch
          checked={mod.theme === "dark"}
          onClick={() => mod.setTheme((mode) => (mode === "light" ? "dark" : "light"))}
          //  value={mode === "light" ? "light" : "dark"}
          //  control={<Switch color="primary" />}
          //    label={mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          //    labelPlacement="end"
        />
      </FormGroup>
      {mod.theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </div>
  );
};

export default DarkMode;
