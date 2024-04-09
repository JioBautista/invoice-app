import React from "react";
import InvoiceForm from "./InvoiceForm";
import { useStore } from "../store/useStore";
import {
  Container,
  Box,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function ClientList() {
  // DATA  FETCHED FROM APP COMPONENT
  const { data } = useLoaderData();

  // MEDIA QUERY FOR MOBILE SIZE
  const mobile = useMediaQuery("(max-width:500px)");

  // FILTER DROPDOWN STATE
  const [status, setStatus] = React.useState("");

  // FILTER DROPDOWN EVENT
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  // STATE MANAGEMENT
  const { toggleDrawer } = useStore((state) => ({
    toggleDrawer: state.toggleDrawer,
  }));
  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 10 }}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={2}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant={mobile ? "h6" : "h4"}
              sx={{ fontWeight: "bold" }}
            >
              Invoices
            </Typography>
            {data ? (
              <Typography>Total number of invoices: {data.count}</Typography>
            ) : (
              <Typography>No Invoices</Typography>
            )}
          </Box>

          {/* FILTER DROPDOWN */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth variant="standard" size="small">
              <InputLabel>Filter</InputLabel>
              <Select value={status} label="Filter" onChange={handleChange}>
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"paid"}>Paid</MenuItem>
                <MenuItem value={"pending"}>Pending</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {mobile ? (
            <IconButton color="primary" onClick={() => toggleDrawer("new")}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              startIcon={<AddCircleIcon />}
              sx={{ borderRadius: "1.25rem" }}
              onClick={() => toggleDrawer("new")}
            >
              New Invoice
            </Button>
          )}
        </Stack>
      </Box>

      {data.count != 0 ? (
        data.results.map((items) => (
          <React.Fragment key={items.id}>
            <Link to={`/${items.id}`} style={{ textDecoration: "none" }}>
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
        <Container maxWidth="xs" sx={{ textAlign: "center" }}>
          <Stack spacing={1} alignItems={"center"}>
            <img src="/assets/illustration-empty.svg" />
            <Typography variant="h5" fontWeight={"bold"}>
              There is nothing here
            </Typography>
            <Typography variant="subtitle1" maxWidth={"29ch"}>
              Create an invoice by clicking the New Invoice button and get
              started
            </Typography>
          </Stack>
        </Container>
      )}
      <InvoiceForm />
    </Container>
  );
}

export default ClientList;
