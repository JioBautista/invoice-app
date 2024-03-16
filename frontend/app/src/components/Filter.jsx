import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
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
  );
}
