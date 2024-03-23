import React from "react";
import {
  Drawer,
  Box,
  Grid,
  Typography,
  TextField,
  Input,
  Container,
} from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

function EditInfo({ isOpen, toggleDrawer, clientData }) {
  return (
    <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
      {/* BILL FROM BOX */}
      <Box sx={{ padding: 2 }} maxWidth={"500px"}>
        <Typography variant="h6">
          Edit #{clientData && clientData.invoice_num}
        </Typography>
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
      <Box sx={{ padding: 2 }} maxWidth={"500px"}>
        <Typography>Bill To</Typography>
        <Grid container spacing={1}>
          {/* GRID ITEM 1 */}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Client's Name"
              defaultValue={clientData.client_name}
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
              defaultValue={clientData.client_email}
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
              defaultValue={clientData.client_address.street}
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
              defaultValue={clientData.client_address.city}
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
              defaultValue={clientData.client_address.postCode}
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
              defaultValue={clientData.client_address.country}
              size="small"
              margin="normal"
              fullWidth
            />
          </Grid>

          {/* GRID ITEM 7 */}
          <Grid item xs={12}>
            {/* <TextField
              variant="outlined"
              size="small"
              margin="normal"
              fullWidth
              type="date"
              label="Invoice Date"
            /> */}
            <DatePicker
              defaultValue={dayjs(clientData.payment_due)}
              label="Invoice Date"
            />
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
}

export default EditInfo;
