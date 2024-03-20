import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Menu({ data }) {
  const mobile = useMediaQuery("(max-width:500px)");
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
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

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth variant="standard" size="small">
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value={"paid"}>Paid</MenuItem>
              <MenuItem value={"pending"}>Pending</MenuItem>
              <MenuItem value={"draft"}>Draft</MenuItem>
            </Select>
          </FormControl>
        </Box>

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
