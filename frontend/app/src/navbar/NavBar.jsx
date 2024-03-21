import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <AppBar enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Invoice
          </Typography>
          <Switch color="default" />
          <Avatar>JP</Avatar>
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mb: 3 }} />
    </>
  );
}

export default NavBar;
