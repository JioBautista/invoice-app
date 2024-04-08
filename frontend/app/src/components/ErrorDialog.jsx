import React from "react";
import { useStore } from "../store/useStore";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function ErrorDialog() {
  const { formModal, toggleForm } = useStore((state) => ({
    formModal: state.formModal,
    toggleForm: state.toggleForm,
  }));
  return (
    <>
      <Dialog open={formModal}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>Check fields again</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => toggleForm(true)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ErrorDialog;
