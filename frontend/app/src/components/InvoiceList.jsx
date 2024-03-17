import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function InvoiceList({ data }) {
  return (
    <>
      {data.map((items) => (
        <>
          <Paper sx={{ mb: 3, padding: 3 }} elevation={3}>
            <Grid container spacing={1} justifyContent={"space-between"}>
              <Grid item xs={6} sm={2}>
                <Typography sx={{ fontWeight: "bold" }}>
                  #{items.invoice_num}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography sx={{ color: "#858BB2" }} variant="body1">
                  {items.client_name}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography sx={{ color: "#7E88C3" }} variant="body1">
                  Due {items.payment_due}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography sx={{ fontWeight: "bold" }} variant="body1">
                  {items.total}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography variant="button">{items.status}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </>
      ))}
    </>
  );
}
