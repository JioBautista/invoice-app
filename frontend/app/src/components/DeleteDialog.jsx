import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useStore } from "../store/useStore";
function DeleteDialog() {
  const { deleteModal, toggleDelete } = useStore((state) => ({
    deleteModal: state.deleteModal,
    toggleDelete: state.toggleDelete,
  }));
  return (
    <Dialog open={deleteModal} onClose={toggleDelete}>
      <DialogTitle>{"Confirm Deletion"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this invoice? This action cannot be
          undone.
        </DialogContentText>
        <DialogActions>
          <Button onClick={toggleDelete}>Cancel</Button>
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: "1.25rem" }}
            onClick={() => deleteResource()}
          >
            Delete
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
