import React from "react";
import Filter from "./Filter";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Menu({ data }) {
  const mobile = useMediaQuery("(max-width:500px)");

  return (
    <Box sx={{ mb: 10 }}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Invoices
          </Typography>
          <Typography variant="subtitle1">
            {data ? `Total number of invoices: ${data.length}` : "No invoices"}
          </Typography>
        </Box>
        <Filter />
        {mobile ? (
          <IconButton color="primary">
            <AddCircleIcon fontSize="large" />
          </IconButton>
        ) : (
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            sx={{ borderRadius: "1.25rem" }}
          >
            New Invoice
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default Menu;
