import React from "react";
import {
  Drawer,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Stack,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

function EditInfo({ isOpen, toggleDrawer, clientData }) {
  const mobile = useMediaQuery("(max-width:500px)");

  const paymentTermsValue = [
    {
      value: 1,
      label: "Net 1 day",
    },
    {
      value: 7,
      label: "Net 7 days",
    },
    {
      value: 14,
      label: "Net 14 days",
    },
    {
      value: 30,
      label: "Net 30 days",
    },
  ];

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
            <TextField
              select
              label="Payment Terms"
              defaultValue={clientData.payment_terms}
              fullWidth
            >
              {paymentTermsValue.map((option) => (
                <MenuItem value={option.value} key={option.value}>
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
              defaultValue={clientData.description}
              size="small"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>

      {/* ITEM LIST BOX */}
      <Box sx={{ padding: 2 }} maxWidth={"600px"}>
        <Typography>Item List</Typography>
        <Grid container spacing={1}>
          {clientData &&
            clientData.items.map((item) => (
              <React.Fragment key={item.id}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    label="Item Name"
                    defaultValue={item.name}
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={2} sm={1}>
                  <TextField
                    variant="outlined"
                    label="Qty"
                    defaultValue={item.quantity}
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={4} sm={2}>
                  <TextField
                    variant="outlined"
                    label="Price"
                    defaultValue={item.price}
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6} sm={3}>
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
              </React.Fragment>
            ))}
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
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: "1.25rem" }}
            size="large"
          >
            Save Changes
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default EditInfo;
