import { Box, Grid, styled } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import CardComp from "./CardComp";
import Cardd from "./Cardd";
import { StyledBoxRes } from "./Dialog";
import NewCard from "./NewCard";
import { Yeto } from "./Yeto";
const Hello = () => {
  const userCon = useContext(UserContext);
  console.log("hello", userCon);

  const StyledBox = styled(Box)(({ theme }) => ({
    width: "400px",
    display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // // flex: "1 200px",
    // justifyContent: "center",
    //  gridTemplateColumns: "auto auto auto auto",
    // [theme.breakpoints.down("md")]: {
    //   gridTemplateColumns: "auto ",
    // },
  }));

  return (
    <StyledBoxRes>
      <NewCard imag="src/assets/exc.jpg" />
      <NewCard imag="src/assets/excc.jpeg" />
      <NewCard imag="src/assets/paela.jpg" />
      <NewCard imag="src/assets/dell.jpg" />
      <NewCard imag="src/assets/exc.jpg" />
      <NewCard imag="src/assets/excc.jpeg" />
      <NewCard imag="src/assets/paela.jpg" />
      <NewCard imag="src/assets/dell.jpg" />
      <NewCard imag="src/assets/exc.jpg" />
      <NewCard imag="src/assets/excc.jpeg" />
      <NewCard imag="src/assets/paela.jpg" />
    </StyledBoxRes>
  );
};
export default Hello;
