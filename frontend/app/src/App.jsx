import React from "react";
import Layout from "./layout/Layout";
import ClientList from "./components/ClientList";
import ClientInfo from "./components/ClientInfo";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [clientId, setClientId] = React.useState("");
  const [clientData, setClientData] = React.useState("");
  const [data, setData] = React.useState("");

  const handleData = (data) => {
    setClientId(data);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/clients");
      setData(response.data);
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };

  const fetchClient = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/clients/${clientId}`
      );
      setClientData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
    fetchClient();
  }, [clientId]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<ClientList handleData={handleData} data={data} />}
          />
          <Route
            path={`clients/${clientId}`}
            element={<ClientInfo clientData={clientData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
