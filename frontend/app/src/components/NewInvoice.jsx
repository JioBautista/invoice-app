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
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { DateField } from "@mui/x-date-pickers";

const paymentTermsValues = [
  {
    value: "Net 1 Day",
  },
  {
    value: "Net 7 Days",
  },
  {
    value: "Net 14 Days",
  },
  {
    value: "Net 30 Days",
  },
];

function NewInvoice({ isOpen, toggleDrawer }) {
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "Items",
  });
  const onSubmit = (data) => console.log(data);

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
              />
            </Grid>

            {/* GRID ITEM 8 */}
            <Grid item xs={6} sm={6}>
              <TextField select fullWidth label="Payment Terms">
                {paymentTermsValues.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    {...register("payment_terms")}
                  >
                    {option.value}
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
