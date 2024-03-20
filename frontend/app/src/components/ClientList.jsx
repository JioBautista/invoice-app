import React from "react";
import Menu from "./Menu";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ClientList({ handleData, data }) {
  return (
    <Container maxWidth="md">
      <Menu data={data} />
      {data ? (
        data.results.map((items) => (
          <React.Fragment key={items.id}>
            <Link
              to={`clients/${items.id}`}
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleData(items.id);
              }}
            >
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
                    {/* <Chip label={items.status} color="primary" size="small" /> */}
                    <Typography variant="button">{items.status}</Typography>
                  </Grid>
                  <Grid item xs={"auto"}>
                    <ArrowForwardIosIcon color="primary" fontSize="small" />
                  </Grid>
                </Grid>
              </Paper>
            </Link>
          </React.Fragment>
        ))
      ) : (
        <Typography>Error</Typography>
      )}
    </Container>
  );
}

export default ClientList;
