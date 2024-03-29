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
  const { register, handleSubmit, control } = useForm();
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
  return (
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
            {/* GRID ITEM 1 */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Client's Name"
                size="small"
                margin="normal"
                fullWidth
                {...register("client_name")}
              />
            </Grid>

            {/* GRID ITEM 2 */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Client's Email"
                size="small"
                margin="normal"
                fullWidth
                {...register("client_email")}
              />
            </Grid>

            {/* GRID ITEM 3 */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Street Address"
                size="small"
                margin="normal"
                fullWidth
                {...register("client_address.street")}
              />
            </Grid>

            {/* GRID ITEM 4 */}
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="City"
                size="small"
                margin="normal"
                fullWidth
                {...register("client_address.city")}
              />
            </Grid>

            {/* GRID ITEM 5 */}
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Post Code"
                size="small"
                margin="normal"
                fullWidth
                {...register("client_address.postCode")}
              />
            </Grid>

            {/* GRID ITEM 6 */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Country"
                size="small"
                margin="normal"
                fullWidth
                {...register("client_address.country")}
              />
            </Grid>

            {/* GRID ITEM 7 */}
            <Grid item xs={6} sm={6}>
              <DateField
                label="Invoice Date"
                // defaultValue={dayjs()}
                {...register("created_at")}
                format="YYYY-MM-DD"
              />
            </Grid>

            {/* GRID ITEM 8 */}
            <Grid item xs={6} sm={6}>
              <TextField
                select
                fullWidth
                label="Payment Terms"
                defaultValue={paymentTermsValues[0].value}
                {...register("payment_terms")}
              >
                {paymentTermsValues.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* GRID ITEM 9 */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Project Description"
                size="small"
                margin="normal"
                fullWidth
                {...register("description")}
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
              {...register("status", { value: "paid" || "Paid" })}
            >
              Save & Send
            </Button>
          </Stack>
        </Box>
      </form>
    </Drawer>
  );
}

export default NewInvoice;
