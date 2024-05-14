import React from "react";
import { Grid, Typography } from "@mui/material";

function Details({ clientData, mobile }) {
  const typographyStyles = {
    fontWeight: "bold",
  };

  return (
    <Grid container spacing={3} sx={{ mb: 10 }}>
      {/* INVOICE NUMBER */}
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">#{clientData.invoice_num}</Typography>
        <Typography variant="subtitle1" fontWeight={600}>
          {clientData.description}
        </Typography>
      </Grid>

      {/* SENDER ADRESS */}
      <Grid item xs={12} sm={6} textAlign={mobile ? "left" : "right"}>
        {clientData && clientData.sender_address && (
          <>
            <Typography>{clientData.sender_address.street}</Typography>
            <Typography>{clientData.sender_address.city}</Typography>
            <Typography>{clientData.sender_address.postCode}</Typography>
            <Typography>{clientData.sender_address.country}</Typography>
          </>
        )}
      </Grid>

      {/* CREATED AT */}
      <Grid item xs={6} sm={2}>
        <Typography>Invoice Date</Typography>
        <Typography {...typographyStyles}>{clientData.created_at}</Typography>
      </Grid>

      {/* PAYMENT DUE */}
      <Grid item xs={6} sm={3}>
        <Typography>Payment Due</Typography>
        <Typography {...typographyStyles}>{clientData.payment_due}</Typography>
      </Grid>

      {/* CLIENT ADDRESS */}
      <Grid item xs={12} sm={3}>
        <Typography>Bill To</Typography>
        <Typography {...typographyStyles}>{clientData.client_name}</Typography>
        {clientData && clientData.client_address && (
          <>
            <Typography>{clientData.client_address.street}</Typography>
            <Typography>{clientData.client_address.city}</Typography>
            <Typography>{clientData.client_address.postCode}</Typography>
            <Typography>{clientData.client_address.country}</Typography>
          </>
        )}
      </Grid>

      {/* CLIENT EMAIL */}
      <Grid item xs={12} sm={4}>
        <Typography>Sent to</Typography>
        <Typography {...typographyStyles}>{clientData.client_email}</Typography>
      </Grid>
    </Grid>
  );
}

export default Details;
