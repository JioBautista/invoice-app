import React from "react";
import {
  Drawer,
  Grid,
  TextField,
  Box,
  MenuItem,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

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
  return (
    <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
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
            />
          </Grid>

          {/* GRID ITEM 7 */}
          <Grid item xs={6} sm={6}>
            <DatePicker label="Invoice Date" />
          </Grid>

          {/* GRID ITEM 8 */}
          <Grid item xs={6} sm={6}>
            <TextField select fullWidth label="Payment Terms">
              {paymentTermsValues.map((option) => (
                <MenuItem key={option.value} value={option.value}>
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
            />
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
}

export default NewInvoice;
