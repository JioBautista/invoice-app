import React from "react";
import { useStore } from "../store/useStore";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function DeleteItemsDialog() {
  const { deleteItemModal, toggleDeleteItem } = useStore((state) => ({
    deleteItemModal: state.deleteItemModal,
    toggleDeleteItem: state.toggleDeleteItem,
  }));
  return (
    <>
      <Dialog open={deleteItemModal} onClose={toggleDeleteItem}>
        <DialogTitle>Notice</DialogTitle>
        <DialogContent>
          <DialogContentText>Item removed</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={toggleDeleteItem}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteItemsDialog;
