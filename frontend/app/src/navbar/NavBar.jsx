import React from "react";
import { ThemeContext } from "../App";
import {
  Toolbar,
  Switch,
  Typography,
  AppBar,
  IconButton,
  Badge,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
  Collapse,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useStore } from "../store/useStore";

function NavBar() {
  const [theme, toggleTheme] = React.useContext(ThemeContext);
  const toggleMobileMenu = useStore((state) => state.toggleMobileMenu);
  const mobile = useMediaQuery("(max-width:500px)");

  return (
    <>
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Manager
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={0} color="error" showZero>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {mobile ? null : (
            <>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ marginInline: 2 }}
              />

              <List>
                <ListItem disablePadding disableGutters>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary="jiopacho"
                    secondary={<Typography>pachojio@gmail.com</Typography>}
                  />
                  {/* <Switch
                color="default"
                checked={theme}
                onChange={() => toggleTheme(!theme)}
              /> */}
                </ListItem>
              </List>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
