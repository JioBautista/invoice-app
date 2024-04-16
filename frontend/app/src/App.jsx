import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavBar from "./navbar/NavBar";
import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/clients");
    const data = response.data;
    return { data };
  } catch (error) {
    console.error("Error Fetching data", error);
  }
}
export async function fetchClientInfo({ params }) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/clients/${params.clientId}`
    );
    const clientData = response.data;
    return { clientData };
  } catch (error) {
    console.log(error);
  }
}

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </LocalizationProvider>
    // </ThemeProvider>
  );
}

export default App;
