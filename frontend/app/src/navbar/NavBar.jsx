import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";

function NavBar() {
  return (
    <>
      <AppBar enableColorOnDark color="info">
        <Toolbar>
          <IconButton
            aria-label="home"
            sx={{ flexGrow: 1, justifyContent: "flex-start" }}
          >
            <Home fontSize="large" />
          </IconButton>
          <Switch />
          <Avatar>JP</Avatar>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mb: 3 }} />
    </>
  );
}

export default NavBar;
