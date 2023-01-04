import { Box, Grid, InputBase, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import "../App.css";
const AppBox = styled(Grid)(({ theme }) => ({}));

const NappBar = () => {
  return (
    <Grid container spacing={4} style={{ marginTop: "1px", marginBottom: "10px" }}>
      <Grid item xs={4} md={4} style={{ textAlign: "left" }}>
        <Button
          className="btn1"
          variant="contained"
          size="large"
          style={{ width: "100%", height: "4rem" }}>
          <h2>BEST SELLERS </h2>
        </Button>
      </Grid>
      <Grid item xs={4} md={4} style={{}}>
        <Button
          className="btn2"
          variant="contained"
          size="large"
          style={{ width: "100%", height: "4rem" }}>
          <h2>MOST VIEWED</h2>
        </Button>{" "}
      </Grid>

      <Grid item xs={4} md={4} style={{}}>
        <Button
          className="btn3"
          variant="contained"
          size="large"
          style={{ width: "100%", height: "4rem" }}>
          <h2 style={{}}> DISCOUNTS</h2>
        </Button>
      </Grid>
    </Grid>
  );
};

export default NappBar;
