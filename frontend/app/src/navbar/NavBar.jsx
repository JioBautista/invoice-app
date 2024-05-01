import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { ThemeContext } from "../App";

function NavBar() {
  const [theme, toggleTheme] = React.useContext(ThemeContext);

  return (
    <>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Invoice
          </Typography>
          <Switch
            color="default"
            checked={theme}
            onChange={() => toggleTheme(!theme)}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
