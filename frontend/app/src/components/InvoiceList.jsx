import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function InvoiceList({ data }) {
  return (
    <>
      {data ? (
        data.map((items) => (
          <React.Fragment key={items.id}>
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
          </React.Fragment>
        ))
      ) : (
        <Box>
          <Stack spacing={1} alignItems={"center"} sx={{ textAlign: "center" }}>
            <img src="/assets/illustration-empty.svg" />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              There is nothing here
            </Typography>
            <Typography
              sx={{ width: "29ch", color: "#888EB0" }}
              variant="subtitle1"
            >
              Create an invoice by clicking the{" "}
              <span style={{ fontWeight: "bold" }}>New</span> button and get
              started
            </Typography>
          </Stack>
        </Box>
      )}
    </>
  );
}
