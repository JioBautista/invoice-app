import React from "react";
import { useStore } from "../store/useStore";
import { ThemeContext } from "../App";
import { Link } from "react-router-dom";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Navigate } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  const [theme, toggleTheme] = React.useContext(ThemeContext);
  const [hasLogOut, setHasLogOut] = React.useState(false);

  const { mobileMenu, toggleMobileMenu } = useStore((state) => ({
    mobileMenu: state.mobileMenu,
    toggleMobileMenu: state.toggleMobileMenu,
  }));

  const LogOut = (index) => {
    if (index === 1) {
      sessionStorage.clear();
      setHasLogOut(true);
    }
    if (index === 0) {
      toggleTheme(!theme);
    }
  };

  const drawer = (
    <Box>
      <Toolbar />
      <List sx={{ paddingBlockStart: 3 }}>
        {[{ name: "Invoice Log", icon: <DescriptionIcon />, link: "/" }].map(
          (items) => (
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`${items.link}`}
            >
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{items.icon}</ListItemIcon>
                  <ListItemText primary={items.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          )
        )}
      </List>

      <Divider />

      <List>
        {[
          {
            name: "Light/Dark Mode",
            icon: <DarkModeIcon />,
          },
          { name: "Logout", icon: <LogoutIcon /> },
        ].map((items, index) => (
          <ListItem>
            <ListItemButton onClick={() => LogOut(index)}>
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText primary={items.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="temporary"
        open={mobileMenu}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        open
      >
        {drawer}
      </Drawer>
      {hasLogOut ? <Navigate to="/login" /> : null}
    </Box>
  );
}

export default Sidebar;
