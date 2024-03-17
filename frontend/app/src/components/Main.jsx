import React from "react";
import axios from "axios";
import Menu from "./Menu";
import InvoiceList from "./InvoiceList";
import { Container } from "@mui/material";

function Main() {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/clients/");
      setData(response.data.results);
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <Container maxWidth="md">
      <Menu data={data} />
      <InvoiceList data={data} />
    </Container>
  );
}

export default Main;
