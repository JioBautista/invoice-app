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
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              size="small"
              margin="normal"
              fullWidth
              type="date"
            />
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
}

export default EditInfo;
