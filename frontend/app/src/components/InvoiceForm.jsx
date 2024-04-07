import React from "react";
import {
  Drawer,
  Grid,
  TextField,
  Box,
  MenuItem,
  Typography,
  Button,
  Stack,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";
import axios from "axios";

const paymentTermsValues = [
  {
    value: 1,
    label: "Net 1 Day",
  },
  {
    value: 7,
    label: "Net 7 Days",
  },
  {
    value: 14,
    label: "Net 14 Days",
  },
  {
    value: 30,
    label: "Net 30 Days",
  },
];

function InvoiceForm({ isOpen, toggleDrawer, mode, clientData }) {
  // REACT-HOOK-FORM
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  // SUBMIT FORM ELEMENT POST REQUEST
  const onSubmit = (data) => {
    axios
      .post("http://127.0.0.1:8000/clients/", data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    console.log(data);
  };

  // SUBMIT FORM ELEMENT PUT REQUEST
  const editResource = (data) => {
    axios
      .put(`http://127.0.0.1:8000/clients/${clientData.id}/`, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    console.log(data);
  };

  // SAVE AND SEND BUTTON
  const submitButton = () => {
    setOpenModal(true);
    toggleDrawer(false);
  };
  // CLOSE BUTTON ON ERROR MODAL
  const errorButton = () => {
    setOpenModal(false);
    toggleDrawer(true);
  };
  // MODAL STATE
  const [openModal, setOpenModal] = React.useState(false);
  // MEDIA QUERY FOR MOBILE
  const mobile = useMediaQuery("(max-width:500px)");

  return (
    <>
      <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
        <form onSubmit={handleSubmit(mode === "new" ? onSubmit : editResource)}>
          {/* BILL FROM BOX */}
          <Box sx={{ padding: 2 }} maxWidth={"600px"}>
            <Typography variant="h6">New Invoice</Typography>
            <Typography>Bill From</Typography>
            <Grid container spacing={1}>
              {/* BILL FROM STREET ADDRESS */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Street Address"
                  defaultValue={"19 Union Terrace"}
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("sender_address.street", { required: true })}
                />
              </Grid>

              {/* BILL FROM CITY */}
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="City"
                  defaultValue={"London"}
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("sender_address.city", { required: true })}
                />
              </Grid>

              {/* BILL FROM POST CODE */}
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Post Code"
                  defaultValue={"E1 3EZ"}
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("sender_address.postCode", { required: true })}
                />
              </Grid>

              {/* BILL FROM COUNTRY */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Country"
                  defaultValue={"United Kingdom"}
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("sender_address.country", { required: true })}
                />
              </Grid>
            </Grid>
          </Box>

          {/* BILL TO BOX */}
          <Box sx={{ padding: 2 }} maxWidth={"600px"}>
            <Typography>Bill To</Typography>
            <Grid container spacing={1}>
              {/* NAME */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Client's Name"
                  size="small"
                  margin="normal"
                  defaultValue={
                    clientData && clientData.client_name
                      ? clientData.client_name
                      : null
                  }
                  fullWidth
                  {...register("client_name", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                {errors.client_name && <Alert severity="error">Required</Alert>}
              </Grid>

              {/* EMAIL */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Client's Email"
                  size="small"
                  margin="normal"
                  fullWidth
                  defaultValue={
                    clientData && clientData.client_email
                      ? clientData.client_email
                      : null
                  }
                  {...register("client_email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
                  })}
                />
                {errors.client_email && (
                  <Alert severity="error">Required</Alert>
                )}
              </Grid>

              {/* STREET ADDRESS */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Street Address"
                  size="small"
                  margin="normal"
                  defaultValue={
                    clientData && clientData.client_address
                      ? clientData.client_address.street
                      : null
                  }
                  fullWidth
                  {...register("client_address.street", {
                    required: true,
                    maxLength: 30,
                  })}
                />
                {errors.client_address && errors.client_address.street && (
                  <Alert severity="error">Required</Alert>
                )}
              </Grid>

              {/* CITY */}
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  label="City"
                  size="small"
                  margin="normal"
                  defaultValue={
                    clientData && clientData.client_address
                      ? clientData.client_address.city
                      : null
                  }
                  fullWidth
                  {...register("client_address.city", { required: true })}
                />
                {errors.client_address && errors.client_address.city && (
                  <Alert severity="error">Required</Alert>
                )}
              </Grid>

              {/* POST CODE */}
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  label="Postal Code"
                  size="small"
                  margin="normal"
                  fullWidth
                  defaultValue={
                    clientData && clientData.client_address
                      ? clientData.client_address.postCode
                      : null
                  }
                  {...register("client_address.postCode", { required: true })}
                />
                {errors.client_address && errors.client_address.postCode && (
                  <Alert severity="error">Required</Alert>
                )}
              </Grid>

              {/* COUNTRY */}
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  label="Country"
                  size="small"
                  margin="normal"
                  fullWidth
                  defaultValue={
                    clientData && clientData.client_address
                      ? clientData.client_address.country
                      : null
                  }
                  {...register("client_address.country", { required: true })}
                />
                {errors.client_address && errors.client_address.country && (
                  <Alert severity="error">Required</Alert>
                )}
              </Grid>

              {/* INVOICE NUMBER */}
              <Grid item xs={6} sm={6}>
                <TextField
                  variant="outlined"
                  label="Invoice Number"
                  size="small"
                  margin="normal"
                  defaultValue={
                    clientData && clientData.invoice_num
                      ? clientData.invoice_num
                      : null
                  }
                  fullWidth
                  {...register("invoice_num", { required: true, maxLength: 6 })}
                />
                {errors.invoice_num && <Alert severity="error">Required</Alert>}
              </Grid>

              {/* PAYMENT TERMS */}
              <Grid item xs={6} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="Payment Terms"
                  margin="normal"
                  size="small"
                  defaultValue={
                    clientData && clientData.payment_terms
                      ? clientData.payment_terms
                      : paymentTermsValues[0].value
                  }
                  {...register("payment_terms", { required: true })}
                >
                  {paymentTermsValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* CREATED AT */}
              <Grid item xs={6} sm={4}>
                <DatePicker
                  label="Invoice Date"
                  defaultValue={dayjs()}
                  {...register("created_at", { required: true })}
                  format="YYYY-MM-DD"
                />
                {errors.created_at && <Alert severity="error">Required</Alert>}
              </Grid>

              {/* PAYMENT DUE */}
              <Grid item xs={6} sm={4}>
                <DatePicker
                  label="Invoice Due"
                  defaultValue={dayjs()}
                  {...register("payment_due", { required: true })}
                  format="YYYY-MM-DD"
                />
                {errors.payment_due && <Alert severity="error">Required</Alert>}
              </Grid>

              {/* PROJECT DESCRIPTION */}
              <Grid item xs={9}>
                <TextField
                  variant="outlined"
                  label="Project Description"
                  size="small"
                  margin="normal"
                  defaultValue={
                    clientData && clientData.description
                      ? clientData.description
                      : null
                  }
                  fullWidth
                  {...register("description")}
                />
              </Grid>

              {/* ITEMS GRAND TOTAL */}
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  label="Grand Total"
                  size="small"
                  margin="normal"
                  defaultValue={
                    clientData && clientData.total ? clientData.total : null
                  }
                  fullWidth
                  {...register("total")}
                />
              </Grid>
            </Grid>
          </Box>

          {/* ITEM LIST BOX */}
          <Box sx={{ padding: 2 }} maxWidth={"600px"}>
            <Typography>Item List</Typography>
            <Grid container spacing={1}>
              {/* RENDER ITEMS */}
              {fields.map((item, index) => (
                <React.Fragment key={item.id}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      label="Item Name"
                      size="small"
                      margin="normal"
                      fullWidth
                      {...register(`items.${index}.name`)}
                    />
                  </Grid>

                  <Grid item xs={2} sm={2}>
                    <TextField
                      variant="outlined"
                      label="Qty"
                      size="small"
                      margin="normal"
                      fullWidth
                      {...register(`items.${index}.quantity`)}
                    />
                  </Grid>

                  <Grid item xs={4} sm={3}>
                    <TextField
                      variant="outlined"
                      label="Price"
                      size="small"
                      margin="normal"
                      fullWidth
                      {...register(`items.${index}.price`)}
                    />
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <TextField
                        variant="outlined"
                        label="Total"
                        size="small"
                        margin="normal"
                        fullWidth
                        {...register(`items.${index}.total`)}
                      />
                      <IconButton onClick={() => remove(index)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Box>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Box>

          {/* BUTTONS BOX */}
          <Box sx={{ padding: 2 }}>
            {/* ADD NEW ITEM BUTTON */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{
                borderRadius: "1.25rem",
                margin: "auto",
                mb: 3,
              }}
              startIcon={<AddIcon />}
              onClick={() => append()}
            >
              Add New Item
            </Button>

            <Stack
              direction={"row"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              {mode === "edit" ? (
                <>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "1.25rem" }}
                    onClick={() => toggleDrawer(false)}
                    size="large"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: "1.25rem" }}
                    size="large"
                    type="submit"
                  >
                    Save Changes
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "1.25rem" }}
                    onClick={() => toggleDrawer(false)}
                    size={mobile ? "small" : "large"}
                  >
                    Discard
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: "1.25rem" }}
                    size={mobile ? "small" : "large"}
                    color="warning"
                  >
                    Save as Draft
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: "1.25rem" }}
                    size={mobile ? "small" : "large"}
                    type="submit"
                    onClick={() => submitButton()}
                    {...register("status", { value: "pending" || "Pending" })}
                  >
                    Save & Send
                  </Button>
                </>
              )}
            </Stack>
          </Box>
        </form>
      </Drawer>

      {isSubmitSuccessful ? (
        <Dialog open={openModal}>
          <DialogTitle>Success!</DialogTitle>
          <DialogContent>
            <DialogContentText>New invoice created</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Link to={`/`}>
              <Button onClick={() => setOpenModal(false)}>Close</Button>
            </Link>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog open={openModal}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <DialogContentText>Check fields again</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => errorButton()}>Close</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}

export default InvoiceForm;
