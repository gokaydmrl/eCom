import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// it could be your App.tsx file or theme file that is included in your tsconfig.json

const Navbar = () => {
  const scrollRef = useRef<HTMLDivElement>();
  const arr: string[] = [
    "Men",
    "Women",
    "Electronics",
    "Outdoor",
    "Mobile",
    "Shoes",
    "Laptops",
    "Sport",
    "NightDress",
    "SkinCare",
  ];
  const [actCat, setActCat] = useState<string>("");
  const theme = useTheme();

  const NavBox = styled(Box)(({ theme }) => ({
    //  backgroundColor: "white",
    marginTop: "2rem",
    display: "flex",
    gap: "2rem",
    // flexWrap: "wrap",
    overflowX: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    // minWidth: "660px",
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },
  }));

  const StyledP = styled("h4")(({ theme }) => ({
    color: "white",
    cursor: "pointer",
    border: "1px solid white",
    backgroundColor: "orange",
    borderRadius: "8rem",
    padding: "16px",
    "&:hover": {
      color: "blue",
    },
  }));
  console.log(actCat);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        scrollBehavior: "smooth",
      }}>
      <ArrowBackIosIcon
        sx={{
          scrollBehavior: "smooth",
          fontSize: "40px",
          marginTop: "2rem",
          opacity: "0.2",
          transition: "0.5s",
          "&:hover": {
            opacity: "1",
          },
        }}
        onClick={() => {
          scrollRef.current!.scrollLeft -= 300;
        }}
      />
      <NavBox
        ref={scrollRef}
        style={{
          borderRadius: "60px",
          /* backgroundColor: "grey", */ width: "90%",
          scrollBehavior: "smooth",
        }}>
        {arr.map((cat, idx) => {
          return (
            <StyledP
              key={idx}
              style={{ color: actCat === cat ? "black" : "", width: "auto" }}
              onClick={() => setActCat(cat)}>
              {cat}
            </StyledP>
          );
        })}
      </NavBox>

      <ArrowForwardIosIcon
        sx={{
          fontSize: "40px",
          marginTop: "2rem",
          opacity: "0.2",
          transition: "0.5s",
          "&:hover": {
            opacity: "1",
          },
        }}
        onClick={() => {
          scrollRef.current!.scrollLeft += 300;
        }}
      />
    </div>
  );
};

export default Navbar;
