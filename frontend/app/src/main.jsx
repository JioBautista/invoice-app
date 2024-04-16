import React from "react";
import ReactDOM from "react-dom/client";
import App, { fetchData, fetchClientInfo } from "./App.jsx";
import ClientList from "./components/ClientList.jsx";
import ClientInfo from "./components/ClientInfo.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: fetchData,
    children: [
      {
        path: "/",
        element: <ClientList />,
        loader: fetchData,
      },
      {
        path: "/:clientId",
        element: <ClientInfo />,
        loader: fetchClientInfo,
      },
    ],
  },
]);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "black",
      paper: "#0C0E16",
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
