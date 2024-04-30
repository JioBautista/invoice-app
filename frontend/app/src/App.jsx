import React from "react";
import { Outlet, redirect } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavBar from "./navbar/NavBar";
import axios from "axios";
import { useStore } from "./store/useStore";

export async function fetchData() {
  try {
    const response = await axios.get(
      "https://clownfish-app-egma9.ondigitalocean.app/clients/"
    );
    const data = response.data;
    return { data };
  } catch (error) {
    console.error("Error Fetching data", error);
  }
}
export async function fetchClientInfo({ params }) {
  try {
    const response = await axios.get(
      `https://clownfish-app-egma9.ondigitalocean.app/clients/${params.clientId}`
    );
    console.log(response);
    const clientData = response.data;
    return { clientData };
  } catch (error) {
    console.log(error);
  }
}
const getToken = sessionStorage.getItem("token");
console.log(getToken);

export async function fetchUsers() {
  try {
    const response = await axios.get(
      "https://clownfish-app-egma9.ondigitalocean.app/users/",
      { headers: { Authorization: `Token ${getToken}` } }
    );
    const currentUser = response.data;
    console.log(currentUser);
    return { currentUser };
  } catch (error) {
    console.log(error);
    return redirect("/login");
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
          <Box>
            <NavBar />
            <Outlet />
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
