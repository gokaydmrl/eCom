import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Input, InputAdornment, TextField } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  width: "600px",
  // height:"50px",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "inherit",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(1),
    width: "200px",
  },
}));
const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "3rem",
  justifyContent: "space-between",
  height: "40px",
  width: "60%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  overflow: "hidden",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
}));

export default function PrimaAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem></MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const StyledDiv = styled("div")(({ theme }) => ({
    marginLeft: "1rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: "2rem",
      width: "16rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      width: "10rem",
    },
  }));

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          lg: "auto auto auto",
          md: "auto auto auto",
          xs: "auto auto auto auto",
        },
        justifyContent: "space-between",
      }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2, display: { lg: "none", sm: "block", md: "none" } }}>
        <MenuIcon sx={{ fontSize: "50px" }} />
      </IconButton>
      <div
        style={{
          height: "auto",
          width: "auto",
          backgroundColor: "#555",
          borderRadius: "50%",
          transform: " skew(310deg)",
          justifyContent: "center",
          border: "none",
        }}>
        <Typography
          variant="h3"
          noWrap
          component="div"
          sx={{
            color: "orange",
            fontSize: "40px",
            transform: "skew(60deg)",
            display: { xs: "none", sm: "none", xl: "block", lg: "block", md: "block" },
          }}>
          ecommerce
        </Typography>
      </div>

      <TextField
        type={"search"}
        label="Search"
        sx={{
          width: { sm: "400px", md: "300px", lg: "800px" },
          height: "auto",
          backgroundColor: "white",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} /> 
       <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper> */}

      {/* <Box sx={{ flexGrow: 1 }} /> */}
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          justifyContent: "end",
          width: "100%",
          right: "0",
        }}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={12} color="error">
            <MailIcon />
          </Badge>
        </IconButton>

        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit">
          <AccountCircle />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none", lg: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit">
          <MoreIcon />
        </IconButton>
      </Box>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
