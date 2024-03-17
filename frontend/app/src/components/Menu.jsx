import React from "react";
import Filter from "./Filter";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Menu() {
  return (
    <Box sx={{ mb: 10 }}>
      <Stack
        direction="row"
        alignItems={"end"}
        justifyContent={"space-between"}
        spacing={2}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Invoices
          </Typography>
          <Typography variant="subtitle1">No Invoices</Typography>
        </Box>
        <Filter />
        <Button
          variant="contained"
          size="medium"
          startIcon={<AddCircleIcon />}
          sx={{ borderRadius: "1.25rem" }}
        >
          New
        </Button>
      </Stack>
    </Box>
  );
}

export default Menu;
