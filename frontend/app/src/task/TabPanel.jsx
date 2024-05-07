import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Icon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function TabPanel(props) {
  const { children, value, index, id } = props;
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 2 }} key={id}>
          <List>
            <ListItem>
              <ListItemText primary={`${children}`} />
              <IconButton>
                <CheckCircleIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </List>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
