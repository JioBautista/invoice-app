import React from "react";
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
  const drawer = (
    <Box>
      <Toolbar />
      <List>
        {[
          { name: "Task Manager", icon: <AddTaskIcon /> },
          { name: "Employee Editor", icon: <PeopleIcon /> },
          { name: "Invoice Log", icon: <DescriptionIcon /> },
        ].map((items, index) => (
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText primary={items.name} />
            </ListItemButton>
          </ListItem>
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
