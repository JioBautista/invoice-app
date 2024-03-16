import React from "react";
// import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import NavBar from "./navbar/NavBar";
import Main from "./components/Main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <Stack>
      <NavBar />
      <Main />
    </Stack>
  );
}

export default App;
