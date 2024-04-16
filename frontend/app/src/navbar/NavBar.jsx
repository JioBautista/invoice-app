import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

function NavBar() {
  return (
    <>
      <AppBar enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Invoice
          </Typography>
          <Switch color="default" />
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ mb: 3 }} />
    </>
  );
}

export default NavBar;
