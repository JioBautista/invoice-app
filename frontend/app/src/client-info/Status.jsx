import React from "react";
import {
  Stack,
  Box,
  Typography,
  Chip,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useStore } from "../store/useStore";

function Status({ clientData }) {
  const { toggleDelete, toggleDrawer } = useStore((state) => ({
    toggleDelete: state.toggleDelete,
    toggleDrawer: state.toggleDrawer,
  }));
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={4}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant="subtitle1" sx={{ mr: 1 }}>
          STATUS:
        </Typography>
        <Chip
          variant={clientData.status === "paid" ? "filled" : "outlined"}
          color={clientData.status === "pending" ? "error" : "success"}
          label={clientData.status.toUpperCase()}
          size="medium"
        />
      </Box>
      <ButtonGroup variant="contained">
        <Button onClick={() => toggleDrawer("edit")}>Edit</Button>
        <Button onClick={toggleDelete}>Delete</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default Status;
