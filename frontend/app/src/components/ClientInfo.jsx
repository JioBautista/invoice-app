import React from "react";
import InvoiceForm from "./InvoiceForm";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import {
  useMediaQuery,
  Container,
  Box,
  Paper,
  Button,
  ButtonGroup,
  Typography,
  Stack,
  Grid,
  Drawer,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ClientInfo() {
  // DRAWER COMPONENT STATE
  const [isOpen, setIsOpen] = React.useState(false);
  // DELETE BUTTON MODAL COMPONENT STATE
  const [deleteModal, setDeleteModal] = React.useState(false);
  // MARK AS PAID BUTTON MODAL COMPONENT STATE
  const [paidModal, setPaidModal] = React.useState(false);
  // MEDIA QUERY FOR MOBILE
  const mobile = useMediaQuery("(max-width:600px)");
  // FETCHED DATA FROM APP COMPONENT
  const { clientData } = useLoaderData();
  // MODE STATE FOR INVOICE FORM COMPONENT
  const [mode, setMode] = React.useState("");

  // TOGGLE DRAWER FUNCTION PASSED DOWN TO INVOICE FORM COMPONENT
  const toggleDrawer = (newOpen) => {
    setIsOpen(newOpen);
  };
  // EDIT BUTTON EVENT
  const editInvoice = () => {
    setIsOpen(true);
    setMode("edit");
  };
  // DELETE MODAL EVENT
  const toggleDeleteModal = (newOpen) => {
    setDeleteModal(newOpen);
  };
  // PAID MODAL EVENT
  const togglePaidModal = (newOpen) => {
    setPaidModal(newOpen);
  };
  // DELETE RESOURCE
  const deleteResource = () => {
    axios
      .delete(`http://127.0.0.1:8000/clients/${clientData.id}/`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // DELETE ITEM RESOURCE
  const deleteItemResource = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/items/${id}/`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="md">
      {/* CLIENT INFO BUTTONS */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="outlined" sx={{ mb: 3 }}>
          Go Back
        </Button>
      </Link>

      <Paper elevation={3} sx={{ padding: mobile ? 2 : 5, mb: 2 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={4}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              Status
            </Typography>
            <Button
              variant="contained"
              color={
                clientData.status === "pending" || clientData.status === "draft"
                  ? "error"
                  : "success"
              }
            >
              {clientData.status}
            </Button>
          </Box>
          <ButtonGroup variant="contained">
            <Button onClick={() => editInvoice()}>Edit</Button>
            <Button onClick={() => toggleDeleteModal(true)}>Delete</Button>
            <Button onClick={() => togglePaidModal(true)}>Mark as Paid</Button>
          </ButtonGroup>
        </Stack>
      </Paper>

      {/* CLIENT DETAILS */}
      <Paper elevation={3} sx={{ padding: mobile ? 2 : 5 }}>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {/* INVOICE NUMBER */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">#{clientData.invoice_num}</Typography>
            <Typography variant="subtitle1">
              {clientData.description}
            </Typography>
          </Grid>

          {/* SENDER ADRESS */}
          <Grid item xs={12} sm={6} textAlign={mobile ? "left" : "right"}>
            {clientData && clientData.sender_address ? (
              <>
                <Typography>{clientData.sender_address.street}</Typography>
                <Typography>{clientData.sender_address.city}</Typography>
                <Typography>{clientData.sender_address.postCode}</Typography>
                <Typography>{clientData.sender_address.country}</Typography>
              </>
            ) : null}
          </Grid>

          {/* CREATED AT */}
          <Grid item xs={6} sm={2}>
            <Typography>Invoice Date</Typography>
            <Typography fontWeight={"bold"}>{clientData.created_at}</Typography>
          </Grid>

          {/* PAYMENT DUE */}
          <Grid item xs={6} sm={3}>
            <Typography>Payment Due</Typography>
            <Typography fontWeight={"bold"}>
              {clientData.payment_due}
            </Typography>
          </Grid>

          {/* CLIENT ADDRESS */}
          <Grid item xs={12} sm={3}>
            <Typography>Bill To</Typography>
            <Typography fontWeight={"bold"}>
              {clientData.client_name}
            </Typography>
            {clientData && clientData.client_address ? (
              <>
                <Typography>{clientData.client_address.street}</Typography>
                <Typography>{clientData.client_address.city}</Typography>
                <Typography>{clientData.client_address.postCode}</Typography>
                <Typography>{clientData.client_address.country}</Typography>
              </>
            ) : null}
          </Grid>

          {/* CLIENT EMAIL */}
          <Grid item xs={12} sm={4}>
            <Typography>Sent to</Typography>
            <Typography fontWeight={"bold"}>
              {clientData.client_email}
            </Typography>
          </Grid>
        </Grid>

        {/* ITEMS */}
        <Box>
          <Box
            bgcolor={"#F9FAFE"}
            sx={{
              padding: mobile ? 2 : 4,
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            }}
          >
            <Grid container spacing={3} alignItems={"center"}>
              <Grid item xs={7}>
                <Typography>Item Name</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography>Total</Typography>
              </Grid>
              {clientData &&
                clientData.items.map((items) => (
                  <React.Fragment key={items.id}>
                    <Grid item xs={4}>
                      <Typography fontWeight={"bold"}>{items.name}</Typography>
                      <Typography fontWeight={"bold"}>
                        {items.quantity} x {items.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography fontWeight={"bold"} textAlign={"right"}>
                        {items.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <IconButton onClick={() => deleteItemResource(items.id)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Grid>
                  </React.Fragment>
                ))}
            </Grid>
          </Box>
          <Box
            bgcolor={"#373B53"}
            sx={{
              padding: mobile ? 2 : 4,
              borderBottomLeftRadius: "0.5rem",
              borderBottomRightRadius: "0.5rem",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              color={"white"}
            >
              <Typography variant={mobile ? "h6" : "h5"}>
                Grand Total
              </Typography>
              {clientData && (
                <Typography variant={mobile ? "h6" : "h5"}>
                  {clientData.total}
                </Typography>
              )}
            </Stack>
          </Box>
        </Box>
      </Paper>

      {/* DRAWER COMPONENT */}
      <InvoiceForm
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        clientData={clientData}
        mode={mode}
      />
      {/* DELETE MODAL BOX */}
      <Dialog open={deleteModal} onClose={() => toggleModal(false)}>
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this invoice? This action cannot be
            undone.
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => toggleDeleteModal(false)}>Cancel</Button>
            <Link to="/">
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "1.25rem" }}
                onClick={() => deleteResource()}
              >
                Delete
              </Button>
            </Link>
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/* MARKED AS PAID MODAL BOX */}
      <Dialog open={paidModal} onClose={() => togglePaidModal(false)}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>
          <DialogContentText>Mark this invoice as paid?</DialogContentText>
          <DialogActions>
            <Button onClick={() => togglePaidModal(false)}>Cancel</Button>
            <Link to="/">
              <Button
                variant="contained"
                color="success"
                sx={{ borderRadius: "1.25rem" }}
              >
                Confirm
              </Button>
            </Link>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default ClientInfo;
