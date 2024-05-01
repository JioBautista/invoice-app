import React from "react";
import { Toolbar, Switch, Typography, AppBar, IconButton } from "@mui/material";
import { ThemeContext } from "../App";
import MenuIcon from "@mui/icons-material/Menu";
import { useStore } from "../store/useStore";

function NavBar() {
  const [theme, toggleTheme] = React.useContext(ThemeContext);
  const toggleMobileMenu = useStore((state) => state.toggleMobileMenu);

  return (
    <>
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            Manager
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
