import React from "react";
import axios from "axios";
import InvoiceForm from "./InvoiceForm";
import DeleteItemsDialog from "./DeleteItemsDialog";
import { Link, useLoaderData } from "react-router-dom";
import { useStore } from "../store/useStore";
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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ClientInfo() {
  // MEDIA QUERY FOR MOBILE
  const mobile = useMediaQuery("(max-width:600px)");
  // FETCHED DATA FROM APP COMPONENT
  const { clientData } = useLoaderData();

  // DELETE RESOURCE
  const deleteResource = () => {
    axios
      .delete(
        `https://clownfish-app-egma9.ondigitalocean.app/clients/${clientData.id}/`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    toggleDelete();
  };

  // DELETE ITEM RESOURCE
  const deleteItemResource = (id) => {
    axios
      .delete(`https://clownfish-app-egma9.ondigitalocean.app/items/${id}/`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    toggleDeleteItem();
  };
  // STATE MANAGEMENT
  const { deleteModal, toggleDelete, toggleDrawer, toggleDeleteItem } =
    useStore((state) => ({
      deleteModal: state.deleteModal,
      toggleDelete: state.toggleDelete,
      toggleDrawer: state.toggleDrawer,
      deleteItemModal: state.deleteItemModal,
      toggleDeleteItem: state.toggleDeleteItem,
    }));

  return (
    <Container maxWidth="md">
      {/* CLIENT INFO BUTTONS */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" sx={{ mb: 3 }}>
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
      </Paper>

      {/* CLIENT DETAILS */}
      <Paper elevation={3} sx={{ padding: mobile ? 2 : 5 }}>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {/* INVOICE NUMBER */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">#{clientData.invoice_num}</Typography>
            <Typography variant="subtitle1" fontWeight={600}>
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
        <Paper elevation={0}>
          <Box
            sx={{
              padding: mobile ? 2 : 4,
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            }}
          >
            {/* ITEMS GRID */}
            <Grid container spacing={mobile ? 1 : 2} alignItems={"center"}>
              <Grid item xs={7}>
                <Typography>Item Name</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography>Total</Typography>
              </Grid>
              {clientData &&
                clientData.items.map((items) => (
                  <React.Fragment key={items.id}>
                    <Grid item xs={6} sm={4}>
                      <Typography fontWeight={"bold"}>{items.name}</Typography>
                      <Typography fontWeight={"bold"}>
                        {items.quantity} x {items.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                      <Typography fontWeight={"bold"} textAlign={"right"}>
                        {items.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sm={4}>
                      <Link to={`/${clientData.id}/`}>
                        <IconButton
                          onClick={() => deleteItemResource(items.id)}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Link>
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
              <Typography variant={mobile ? "h6" : "h5"}>
                {clientData.total}
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Paper>

      {/* DRAWER COMPONENT */}
      <InvoiceForm clientData={clientData} />

      {/* DELETE ITEMS DIALOG */}
      <DeleteItemsDialog />

      {/* DELETE INVOICE DIALOG */}
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
    </Container>
  );
}

export default ClientInfo;
