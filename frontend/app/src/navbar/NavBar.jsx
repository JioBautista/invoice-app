import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";

function NavBar() {
  return (
    <Box>
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
    </Box>
  );
}

export default NavBar;
