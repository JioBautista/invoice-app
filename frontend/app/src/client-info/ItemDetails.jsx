import React from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ItemDetails({ clientData, mobile }) {
  const typographyStyles = {
    fontWeight: "bold",
  };
  return (
    <Box
      sx={{
        padding: mobile ? 2 : 4,
        borderTopLeftRadius: "0.5rem",
        borderTopRightRadius: "0.5rem",
      }}
    >
      <Grid container spacing={mobile ? 1 : 2} alignItems={"center"}>
        <Grid item xs={7}>
          <Typography>Item Name</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>Total</Typography>
        </Grid>
        {clientData &&
          clientData.items.map((items) => (
            <React.Fragment key={items.id}>
              <Grid item xs={6} sm={4}>
                <Typography {...typographyStyles}>{items.name}</Typography>
                <Typography {...typographyStyles}>
                  {items.quantity} x {items.price}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4}>
                <Typography {...typographyStyles} textAlign={"right"}>
                  {items.price}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4}>
                <IconButton onClick={() => deleteItemResource(items.id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Grid>
            </React.Fragment>
          ))}
      </Grid>
    </Box>
  );
}

export default ItemDetails;
