import React from "react";
import {
  Drawer,
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  useMediaQuery,
  Stack,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
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

function EditInfo({ isOpen, toggleDrawer, clientData }) {
  const mobile = useMediaQuery("(max-width:500px)");
  return (
    <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
      {/* BILL FROM BOX */}
      <Box sx={{ padding: 2 }} maxWidth={"600px"}>
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
      <Box sx={{ padding: 2 }} maxWidth={"600px"}>
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
          <Grid item xs={6} sm={6}>
            <DatePicker
              defaultValue={dayjs(clientData.payment_due)}
              label="Invoice Date"
            />
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
              defaultValue={clientData.description}
              size="small"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      {/* ITEM LIST BOX */}
      <Box sx={{ padding: 2, mb: 3 }} maxWidth={"600px"}>
        <Typography>Item List</Typography>
        <Grid container spacing={1}>
          {clientData &&
            clientData.items.map((item) => (
              <>
                <Grid item xs={12} sm={3}>
                  <TextField
                    variant="outlined"
                    label="Item Name"
                    defaultValue={item.name}
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={4} sm={3}>
                  <TextField
                    variant="outlined"
                    label="Qty"
                    defaultValue={item.quantity}
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={4} sm={3}>
                  <TextField
                    variant="outlined"
                    label="Price"
                    defaultValue={item.price}
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4} sm={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <TextField
                      variant="outlined"
                      label="Total"
                      defaultValue={item.total}
                      size="small"
                      margin="normal"
                      fullWidth
                    />
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Box>
                </Grid>
              </>
            ))}
        </Grid>
      </Box>
      <Button
        variant="contained"
        size="large"
        sx={{
          borderRadius: "1.25rem",
          width: "90%",
          margin: "auto",
          mb: 2,
        }}
        startIcon={<AddIcon />}
      >
        Add New Item
      </Button>
      <Box sx={{ padding: 1, mb: 3 }}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={1}
          alignItems={"center"}
        >
          <Button
            variant="outlined"
            sx={{ borderRadius: "1.25rem" }}
            onClick={() => toggleDrawer(false)}
          >
            Cancel
          </Button>
          <Button variant="contained" sx={{ borderRadius: "1.25rem" }}>
            Save Changes
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default EditInfo;
