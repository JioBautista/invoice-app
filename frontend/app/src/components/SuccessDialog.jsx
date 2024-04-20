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

function SuccessDialog({ clientData }) {
  const { formModal, toggleForm, mode } = useStore((state) => ({
    formModal: state.formModal,
    toggleForm: state.toggleForm,
    mode: state.mode,
  }));
  return (
    <>
      <Dialog open={formModal}>
        <DialogTitle>Success!</DialogTitle>
        <DialogContent>
          {mode === "new" ? (
            <DialogContentText>New invoice created</DialogContentText>
          ) : (
            <DialogContentText>Changes saved</DialogContentText>
          )}
        </DialogContent>

        <DialogActions>
          <Link
            to={mode === "new" ? "/" : `/${clientData.id}/`}
            style={{ textDecoration: "none" }}
          >
            <Button onClick={() => toggleForm(false)}>Close</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default SuccessDialog;
