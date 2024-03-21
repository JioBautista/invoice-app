import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ClientList from "./components/ClientList";
import ClientInfo from "./components/ClientInfo";
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

function App() {
  // const [clientId, setClientId] = React.useState("");
  // const [clientData, setClientData] = React.useState("");

  // const fetchClient = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8000/clients/${clientId}`
  //     );
  //     setClientData(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  React.useEffect(() => {
    fetchData();
  }, []);

  // console.log(data);
  return (
    <Box>
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default App;
