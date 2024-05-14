import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function Total({ clientData, mobile }) {
  const variant = { variant: mobile ? "h6" : "h4" };
  return (
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
        alignItems={"center"}
        color={"white"}
      >
        <Typography {...variant}>Total</Typography>
        <Typography {...variant}>{clientData.total}</Typography>
      </Stack>
    </Box>
  );
}

export default Total;
