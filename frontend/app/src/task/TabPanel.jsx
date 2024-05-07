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
import axios from "axios";
import { useStore } from "../store/useStore";

function TabPanel(props) {
  const { children, value, index, id } = props;

  const { setIsDataFetched } = useStore((state) => ({
    setIsDataFetched: state.setIsDataFetched,
  }));

  const deleteTaskAPI = () => {
    axios
      .delete(`https://clownfish-app-egma9.ondigitalocean.app/active/${id}`)
      .then(function (res) {
        console.log(res);
        setIsDataFetched();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const completeTaskAPI = () => {
    axios
      .post(`https://clownfish-app-egma9.ondigitalocean.app/completed/`, {
        is_completed: children,
      })
      .then(function (res) {
        console.log(res);
        setIsDataFetched();
      })
      .catch(function (err) {
        console.log(err);
      });

    deleteTaskAPI();
  };

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 2 }} key={id}>
          <List>
            <ListItem>
              <ListItemText primary={`${children}`} />
              {index !== 1 ? (
                <>
                  <IconButton onClick={completeTaskAPI}>
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton onClick={deleteTaskAPI}>
                    <DeleteIcon />
                  </IconButton>
                </>
              ) : null}
            </ListItem>
            <Divider />
          </List>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
