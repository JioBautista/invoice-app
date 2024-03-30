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
} from "@mui/material";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DateField } from "@mui/x-date-pickers";
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

function NewInvoice({ isOpen, toggleDrawer }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const onSubmit = (data) => {
    axios
      .post("http://127.0.0.1:8000/clients/", data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    console.log(data);
  };
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* BILL FROM BOX */}
          <Box sx={{ padding: 2 }} maxWidth={"600px"}>
            <Typography variant="h6">New Invoice</Typography>
            <Typography>Bill From</Typography>
            <Grid container spacing={1}>
              {/* GRID ITEM 1 */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Street Address"
                  defaultValue={"19 Union Terrace"}
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("sender_address.street")}
                />
              </Grid>

              {/* GRID ITEM 2 */}
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="City"
                  defaultValue={"London"}
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("sender_address.city")}
                />
              </Grid>

              {/* GRID ITEM 3 */}
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Post Code"
                  defaultValue={"E1 3EZ"}
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("sender_address.postCode")}
                />
              </Grid>

              {/* GRID ITEM 4 */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Country"
                  defaultValue={"United Kingdom"}
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("sender_address.country")}
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
                  fullWidth
                  {...register("client_name", { required: true })}
                />
                {errors.client_name && <Typography>Name Required</Typography>}
              </Grid>

              {/* EMAIL */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Client's Email"
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("client_email", { required: true })}
                />
              </Grid>

              {/* STREET ADDRESS */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Street Address"
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("client_address.street", { required: true })}
                />
              </Grid>

              {/* CITY */}
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="City"
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("client_address.city", { required: true })}
                />
              </Grid>

              {/* POST CODE */}
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  label="Post Code"
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("client_address.postCode", { required: true })}
                />
              </Grid>

              {/* COUNTRY */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Country"
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("client_address.country", { required: true })}
                />
              </Grid>

              {/* INVOICE NUMBER */}
              <Grid item xs={12} sm={3}>
                <TextField
                  variant="outlined"
                  label="Invoice Number"
                  size="medium"
                  fullWidth
                  {...register("invoice_num", { required: true })}
                />
              </Grid>

              {/* CREATED AT */}
              <Grid item xs={6} sm={3}>
                <DatePicker
                  label="Invoice Date"
                  size="small"
                  // defaultValue={dayjs()}
                  {...register("created_at", { required: true })}
                  format="YYYY-MM-DD"
                  fullWidth
                />
              </Grid>

              {/* PAYMENT DUE */}
              <Grid item xs={6} sm={3}>
                <DatePicker
                  label="Invoice Due"
                  size="medium"
                  // defaultValue={dayjs()}
                  {...register("payment_due", { required: true })}
                  format="YYYY-MM-DD"
                  fullWidth
                />
              </Grid>

              {/* PAYMENT TERMS */}
              <Grid item xs={6} sm={3}>
                <TextField
                  select
                  fullWidth
                  label="Payment Terms"
                  size="medium"
                  defaultValue={paymentTermsValues[0].value}
                  {...register("payment_terms", { required: true })}
                >
                  {paymentTermsValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* GRID ITEM 10 */}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Project Description"
                  size="small"
                  margin="normal"
                  fullWidth
                  {...register("description", { required: true })}
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
                  <Grid item xs={12} sm={5}>
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

                  <Grid item xs={4} sm={2}>
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
              <Button
                variant="outlined"
                sx={{ borderRadius: "1.25rem" }}
                onClick={() => toggleDrawer(false)}
                size="large"
              >
                Discard
              </Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "1.25rem" }}
                size="large"
                color="warning"
              >
                Save as Draft
              </Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "1.25rem" }}
                size="large"
                type="submit"
                onClick={() => setOpenModal(true)}
                {...register("status", { value: "pending" || "Pending" })}
              >
                Save & Send
              </Button>
            </Stack>
          </Box>
        </form>
      </Drawer>

      <Dialog open={openModal} onClose={openModal}>
        <DialogTitle>
          <Alert severity="success" variant="filled">
            Success!
          </Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>New invoice created</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NewInvoice;
