import React from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function ClientInfo({ clientId }) {
  const [data, setData] = React.useState([]);
  const [clientItems, setClientItems] = React.useState([]);
  const [clientAddress, setClientAddress] = React.useState("");
  const [senderAddress, setSenderAddress] = React.useState("");
  const mobile = useMediaQuery("(max-width:600px)");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/clients/${clientId}/`
      );
      setData(response.data);
      setClientAddress(response.data.client_address);
      setSenderAddress(response.data.sender_address);
      setClientItems(response.data.items);
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [clientId]);

  console.log(data);
  return (
    <Container maxWidth="md">
      {/* CLIENT INFO BUTTONS */}
      <Button variant="outlined" sx={{ mb: 3 }}>
        Go Back
      </Button>

      <Paper elevation={3} sx={{ padding: mobile ? 2 : 5, mb: 6 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={4}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Typography variant="subtitle1" sx={{ mr: 1 }}>
              Status
            </Typography>
            <Button
              variant="contained"
              color={
                data.status === "pending" || data.status === "draft"
                  ? "error"
                  : "info"
              }
            >
              {data.status}
            </Button>
          </Box>
          <ButtonGroup variant="contained">
            <Button>Edit</Button>
            <Button>Delete</Button>
            <Button>Mark as Paid</Button>
          </ButtonGroup>
        </Stack>
      </Paper>

      {/* CLIENT DETAILS */}
      <Paper elevation={3} sx={{ padding: mobile ? 2 : 5 }}>
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {/* GRID ITEM 1 */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">#{data.invoice_num}</Typography>
            <Typography variant="subtitle1">{data.description}</Typography>
          </Grid>

          {/* GRID ITEM 2 */}
          <Grid item xs={12} sm={6} textAlign={mobile ? "left" : "right"}>
            <Typography>{senderAddress.street}</Typography>
            <Typography>{senderAddress.city}</Typography>
            <Typography>{senderAddress.postCode}</Typography>
            <Typography>{senderAddress.country}</Typography>
          </Grid>

          {/* GRID ITEM 3 */}
          <Grid item xs={6} sm={2}>
            <Typography>Invoice Date</Typography>
            <Typography fontWeight={"bold"}>{data.created_at}</Typography>
          </Grid>

          {/* GRID ITEM 4 */}
          <Grid item xs={6} sm={3}>
            <Typography>Payment Due</Typography>
            <Typography fontWeight={"bold"}>{data.payment_due}</Typography>
          </Grid>

          {/* GRID ITEM 5 */}
          <Grid item xs={12} sm={3}>
            <Typography>Bill To</Typography>
            <Typography fontWeight={"bold"}>{data.client_name}</Typography>
            <Typography>{clientAddress.street}</Typography>
            <Typography>{clientAddress.postCode}</Typography>
            <Typography>{clientAddress.country}</Typography>
          </Grid>

          {/* GRID ITEM 6 */}
          <Grid item xs={12} sm={4}>
            <Typography>Sent to</Typography>
            <Typography fontWeight={"bold"}>{data.client_email}</Typography>
          </Grid>
        </Grid>

        <Box>
          <Box
            bgcolor={"#F9FAFE"}
            sx={{
              padding: mobile ? 2 : 4,
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
            }}
          >
            <Grid container spacing={3} alignItems={"center"}>
              <Grid item xs={6}>
                <Typography>Item Name</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography textAlign={"right"}>Total</Typography>
              </Grid>
              {clientItems.map((items) => (
                <React.Fragment key={items.id}>
                  <Grid item xs={6}>
                    <Typography fontWeight={"bold"}>{items.name}</Typography>
                    <Typography fontWeight={"bold"}>
                      {items.quantity} x {items.price}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography fontWeight={"bold"} textAlign={"right"}>
                      {items.total}
                    </Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Box>
          <Box
            bgcolor={"#373B53"}
            sx={{
              padding: mobile ? 2 : 4,
              borderBottomLeftRadius: "0.5rem",
              borderBottomRightRadius: "0.5rem",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              color={"white"}
            >
              <Typography variant="h4">Grand Total</Typography>
              <Typography variant="h4">{data.total}</Typography>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default ClientInfo;
