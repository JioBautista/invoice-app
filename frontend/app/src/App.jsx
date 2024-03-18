import React from "react";
import Layout from "./layout/Layout";
import ClientList from "./components/ClientList";
import ClientInfo from "./components/ClientInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [clientId, setClientId] = React.useState("");

  const handleData = (data) => {
    setClientId(data);
  };
  console.log(clientId);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<ClientList handleData={handleData} />}
            clientId={clientId}
          />
          <Route
            path={`/${clientId}`}
            element={<ClientInfo clientId={clientId} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
