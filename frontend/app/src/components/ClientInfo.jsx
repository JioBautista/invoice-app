import React from "react";
import EditInfo from "./EditInfo";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

function ClientInfo() {
  // STATES
  const [isOpen, setIsOpen] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [paidModal, setPaidModal] = React.useState(false);
  const mobile = useMediaQuery("(max-width:600px)");
  const { clientData } = useLoaderData();

  // HANDLE FUNCTIONS
  const toggleDrawer = (newOpen) => {
    setIsOpen(newOpen);
  };

  const toggleDeleteModal = (newOpen) => {
    setDeleteModal(newOpen);
  };

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

  console.log(clientData);
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
            <Button onClick={() => toggleDrawer(true)}>Edit</Button>
            <Button onClick={() => toggleDeleteModal(true)}>Delete</Button>
            <Button onClick={() => togglePaidModal(true)}>Mark as Paid</Button>
          </ButtonGroup>
        </Stack>
      </Paper>

      {/* CLIENT DETAILS */}
      <Paper elevation={3} sx={{ padding: mobile ? 2 : 5 }}>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {/* GRID ITEM 1 */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">#{clientData.invoice_num}</Typography>
            <Typography variant="subtitle1">
              {clientData.description}
            </Typography>
          </Grid>

          {/* GRID ITEM 2 */}
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

          {/* GRID ITEM 3 */}
          <Grid item xs={6} sm={2}>
            <Typography>Invoice Date</Typography>
            <Typography fontWeight={"bold"}>{clientData.created_at}</Typography>
          </Grid>

          {/* GRID ITEM 4 */}
          <Grid item xs={6} sm={3}>
            <Typography>Payment Due</Typography>
            <Typography fontWeight={"bold"}>
              {clientData.payment_due}
            </Typography>
          </Grid>

          {/* GRID ITEM 5 */}
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

          {/* GRID ITEM 6 */}
          <Grid item xs={12} sm={4}>
            <Typography>Sent to</Typography>
            <Typography fontWeight={"bold"}>
              {clientData.client_email}
            </Typography>
          </Grid>
        </Grid>

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
              <Grid item xs={6}>
                <Typography>Item Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>Total</Typography>
              </Grid>
              {clientData &&
                clientData.items.map((items) => (
                  <React.Fragment key={items.id}>
                    <Grid item xs={6}>
                      <Typography fontWeight={"bold"}>{items.name}</Typography>
                      <Typography fontWeight={"bold"}>
                        {items.quantity} x {items.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography fontWeight={"bold"} textAlign={"right"}>
                        {items.price}
                      </Typography>
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
      <EditInfo
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        clientData={clientData}
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
