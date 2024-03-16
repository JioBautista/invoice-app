import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <>
      <AppBar enableColorOnDark>
        <Toolbar>
          <IconButton aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Invoice
          </Typography>
          <Switch />
          <Avatar>JP</Avatar>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mb: 3 }} />
    </>
  );
}

export default NavBar;
