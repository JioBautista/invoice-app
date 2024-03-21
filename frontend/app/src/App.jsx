import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
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

function App() {
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default App;
