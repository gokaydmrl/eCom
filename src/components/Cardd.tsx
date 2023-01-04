import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import React from "react";

const Cardd = () => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        },
      }}>
      <CardMedia
        sx={{
          paddingTop: "56.25%",
        }}
        //  className={classes.media}
        image="src/assets/excc.jpeg"
      />
      <CardContent
        // className={classes.content}
        sx={{ textAlign: "left", padding: "" }}>
        <Typography className={"MuiTypography--heading"} variant={"h6"} gutterBottom>
          Nature Around Us
        </Typography>
        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
          We are going to learn different kinds of species in nature that live together to form
          amazing environment.
        </Typography>
        <Divider light />
      </CardContent>
    </Card>
  );
};

export default Cardd;
