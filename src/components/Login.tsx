import { useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";
import { Box } from "@mui/material/";
import Slider from "@mui/material/Slider";
import Dnm from "./Dnm";
import CardComp from "./CardComp";
import { Grid } from "@mui/material";

const Login = () => {
  const userCon = useContext(UserContext);
  console.log("login userCon", userCon.isLogged);

  return (
    <>
      Login
      <div>{userCon.isLogged ? "true" : "false"}</div>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <br />
      <Dnm />
      <Box
        sx={{
          alignItems: "flex-start",
          justifyContent: "center",
          display: "flex",
          alignContent: "center",
        }}>
        <CardComp />
        <CardComp />
        <CardComp />
       
      </Box>
    </>
  );
};

export default Login;
