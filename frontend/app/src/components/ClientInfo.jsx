import React from "react";
import axios from "axios";
import InvoiceForm from "./InvoiceForm";
import Status from "../client-info/Status";
import Details from "../client-info/Details";
import Total from "../client-info/Total";
import { useLoaderData } from "react-router-dom";
import { useStore } from "../store/useStore";
import {
  useMediaQuery,
  Container,
  Box,
  Paper,
  Button,
  ButtonGroup,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import DeleteDialog from "./DeleteDialog";
import ItemDetails from "../client-info/ItemDetails";

function ClientInfo() {
  // MEDIA QUERY FOR MOBILE
  const mobile = useMediaQuery("(max-width:600px)");

  // FETCHED DATA FROM APP COMPONENT
  const { clientData } = useLoaderData();

  const paperStyles = {
    elevation: 3,
    sx: { padding: mobile ? 2 : 5, mb: 3 },
  };

  // DELETE RESOURCE
  const deleteResource = () => {
    axios
      .delete(
        `https://clownfish-app-egma9.ondigitalocean.app/clients/${clientData.id}/`
        // `http://127.0.0.1:8000/clients/${clientData.id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    toggleDelete();
  };

  // DELETE ITEM RESOURCE
  const deleteItemResource = (id) => {
    axios
      .delete(
        `https://clownfish-app-egma9.ondigitalocean.app/items/${id}/`
        // `http://127.0.0.1:8000/items/${id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // STATE MANAGEMENT
  const { toggleDelete } = useStore((state) => ({
    toggleDelete: state.toggleDelete,
  }));

  return (
    <Container sx={{ paddingBlock: 12 }} maxWidth="md">
      <Paper {...paperStyles}>
        <Status clientData={clientData} />
      </Paper>

      {/* CLIENT DETAILS */}
      <Paper {...paperStyles}>
        <Details clientData={clientData} mobile={mobile} />

        {/* ITEMS */}
        <Paper
          elevation={0}
          sx={{
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
          }}
        >
          <ItemDetails clientData={clientData} mobile={mobile} />
          <Total clientData={clientData} mobile={mobile} />
        </Paper>
      </Paper>

      <InvoiceForm clientData={clientData} />
      <DeleteDialog />
    </Container>
  );
}

export default ClientInfo;
