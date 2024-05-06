import React from "react";
import { useStore } from "../store/useStore";
import { Link } from "react-router-dom";
import {
  Drawer,
  Toolbar,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

function Sidebar() {
  const { mobileMenu, toggleMobileMenu } = useStore((state) => ({
    mobileMenu: state.mobileMenu,
    toggleMobileMenu: state.toggleMobileMenu,
  }));
  const drawer = (
    <Box>
      <Toolbar />
      <List sx={{ paddingBlockStart: 3 }}>
        {[
          { name: "Task Manager", icon: <AddTaskIcon />, link: "/tasks" },
          { name: "Employee Editor", icon: <PeopleIcon />, link: "/" },
          { name: "Invoice Log", icon: <DescriptionIcon />, link: "/clients" },
        ].map((items, index) => (
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
        ))}
      </List>

      <Divider />

      <List>
        {[
          { name: "Settings", icon: <SettingsIcon /> },
          { name: "Logout", icon: <LogoutIcon /> },
        ].map((items) => (
          <ListItem>
            <ListItemButton>
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
    </Box>
  );
}

export default Sidebar;
