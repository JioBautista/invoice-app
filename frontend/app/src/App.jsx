import React from "react";
import { Outlet, redirect } from "react-router-dom";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavBar from "./navbar/NavBar";
import Sidebar from "./sidebar/Sidebar";
import axios from "axios";

export async function fetchClients() {
  try {
    const token = sessionStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      "https://clownfish-app-egma9.ondigitalocean.app/clients/",
      // "http://127.0.0.1:8000/clients/",
      headers
    );
    const data = response.data;
    return { data };
  } catch (error) {
    console.error("Error Fetching data", error);
    return redirect("/login");
  }
}
export async function fetchClientInfo({ params }) {
  try {
    const token = sessionStorage.getItem("token");
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      `https://clownfish-app-egma9.ondigitalocean.app/clients/${params.clientId}`,
      // `http://127.0.0.1:8000/clients/${params.clientId}`,
      headers
    );
    const clientData = response.data;
    return { clientData };
  } catch (error) {
    console.log(error);
  }
}
export const ThemeContext = React.createContext();

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0C0E16",
      paper: "#141625",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [theme, toggleTheme] = React.useState(false);
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: "flex" }}>
            <NavBar />
            <Sidebar />
            <Outlet />
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
