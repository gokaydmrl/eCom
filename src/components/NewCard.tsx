import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { orange, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Box, Button } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
export default function NewCard({ imag }: { imag: string }) {
  const [isFav, setIsFav] = React.useState<boolean>(false);

  return (
    <Card sx={{ maxWidth: 360, margin: "5px" }}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "16px",
            color: "red",
          }}>
          <Avatar sx={{ bgcolor: "white" }}>
            <IconButton onClick={() => setIsFav((fav) => !fav)} aria-label="settings">
              {isFav ? (
                <FavoriteOutlinedIcon style={{ color: "rgb(255, 120, 1)" }} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          </Avatar>
        </div>
      </div>

      <CardMedia component="img" height="300" image={imag} alt="Paella dish" />

      <CardContent>
        <Typography variant="body1" color="text.primary" sx={{ textAlign: "left" }}>
          Dell Latitude 3520 N027L352015EMEA_U i7-1165G7 8 GB 256 GB SSD Iris Xe Graphics 15.6" Full
          HD Notebook
        </Typography>
        <Rating name="read-only" value={3.5} readOnly precision={0.5} />

        <Typography
          variant="body1"
          color="text.primary"
          sx={{ textAlign: "left", paddingLeft: "16px", opacity: "0.8" }}>
          18.000 TL
        </Typography>

        <Button variant="contained" sx={{ backgroundColor: "orange" }}>
          <AddShoppingCartOutlinedIcon />
        </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
/*
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { orange, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Box, Button } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
export default function NewCard({ imag }: { imag: string }) {
  const [isFav, setIsFav] = React.useState<boolean>(false);

  return (
    <Card
      sx={{
     //   maxHeight: "750px",
        minWidth: 120,
        position: "relative",

        height: { lg: "660px", md: "610px", xs: "560px" },
      }}>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "16px",
          color: "red",
        }}>
        <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
          <IconButton onClick={() => setIsFav((fav) => !fav)} aria-label="settings">
            {isFav ? (
              <FavoriteOutlinedIcon style={{ color: "rgb(255, 120, 1)" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
        </Avatar>
      </div>
      <Box
        sx={{
          minHeight: { xs: "240px", md: "240px" },
          height: { lg: "380px", md: "300px", sm: "280px" },
        }}>
        <CardMedia
          component="img"
          sx={{
            objectFit: "cover",
            height: "96%",
            width: "100%",
          }}
          image={imag}
          alt="Dell Laptop"></CardMedia>
      </Box>
      <div style={{ marginTop: "10px" }}>
        <CardContent>
          <Typography variant="body1" color="text.primary" sx={{ textAlign: "left" }}>
            Dell Latitude 3520 N027L352015EMEA_U i7-1165G7 8 GB 256 GB SSD Iris Xe Graphics 15.6"
            Full HD Notebook
          </Typography>
        </CardContent>
      </div>
      <div style={{ textAlign: "left", marginLeft: "16px" }}>
        <Rating name="read-only" value={3.5} readOnly precision={0.5} />
      </div>
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ textAlign: "left", paddingLeft: "16px", opacity: "0.8" }}>
        18.000 TL
      </Typography>
      <div
        style={{
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
        }}>
        <Button variant="contained" sx={{ backgroundColor: "orange" }}>
          <AddShoppingCartOutlinedIcon />
        </Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </div>
    </Card>
  );
}

*/
