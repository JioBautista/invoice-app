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
import { redirect } from "react-router-dom";

function TabPanel(props) {
  // GET TOKEN
  const token = sessionStorage.getItem("token");
  const { children, value, index, id } = props;

  const { setIsDataFetched } = useStore((state) => ({
    setIsDataFetched: state.setIsDataFetched,
  }));

  const deleteTaskAPI = () => {
    axios
      .delete(
        `https://clownfish-app-egma9.ondigitalocean.app/active/${id}`,
        // `http://127.0.0.1:8000/active/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (res) {
        console.log(res);
        setIsDataFetched();
      })
      .catch(function (err) {
        redirect("/login");
        console.log(err);
      });
  };

  const completeTaskAPI = () => {
    axios
      .post(
        `https://clownfish-app-egma9.ondigitalocean.app/completed/`,
        // `http://127.0.0.1:8000/completed/`,
        {
          is_completed: children,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (res) {
        console.log(res);
        setIsDataFetched();
      })
      .catch(function (err) {
        redirect("/login");
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
