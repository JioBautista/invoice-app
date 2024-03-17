import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function InvoiceList({ data }) {
  return (
    <>
      {data.map((items) => (
        <>
          <Paper sx={{ mb: 3, padding: 3 }} elevation={3}>
            <Grid
              container
              spacing={0.5}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <Grid item xs={3} sm={2}>
                <Typography sx={{ fontWeight: "bold" }}>
                  #{items.invoice_num}
                </Typography>
              </Grid>
              <Grid item xs={9} sm={2}>
                <Typography sx={{ color: "#858BB2" }} variant="body1">
                  {items.client_name}
                </Typography>
              </Grid>
              <Grid item xs={"auto"} sm={3}>
                <Typography sx={{ color: "#7E88C3" }} variant="body1">
                  Due {items.payment_due}
                </Typography>
              </Grid>
              <Grid item xs={"auto"} sm={2}>
                <Typography sx={{ fontWeight: "bold" }} variant="body1">
                  {items.total}
                </Typography>
              </Grid>
              <Grid item xs={"auto"} sm={1}>
                <Typography variant="button">{items.status}</Typography>
              </Grid>
              <Grid item xs={"auto"}>
                <ArrowForwardIosIcon color="primary" fontSize="small" />
              </Grid>
            </Grid>
          </Paper>
        </>
      ))}
    </>
  );
}
