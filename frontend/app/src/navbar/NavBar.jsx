import React from "react";
import {
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useStore } from "../store/useStore";

function NavBar() {
  const toggleMobileMenu = useStore((state) => state.toggleMobileMenu);
  const mobile = useMediaQuery("(max-width:500px)");
  const username = sessionStorage.getItem("username");
  const userEmail = sessionStorage.getItem("email");

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
            Invoice
          </Typography>

          {mobile ? null : (
            <>
              <List>
                <ListItem disablePadding disableGutters>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${username}`}
                    secondary={<Typography>{userEmail}</Typography>}
                  />
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
