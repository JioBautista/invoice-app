import React from "react";
import ReactDOM from "react-dom/client";
import App, { fetchData, fetchClientInfo, fetchUsers } from "./App.jsx";
import ClientList from "./components/ClientList.jsx";
import ClientInfo from "./components/ClientInfo.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import LogIn from "./login/LogIn.jsx";
import { onSubmit } from "./login/LogIn.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: fetchUsers,
    children: [
      {
        path: "/clients",
        element: <ClientList />,
        loader: fetchData,
      },
      {
        path: "clients/:clientId",
        element: <ClientInfo />,
        loader: fetchClientInfo,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
    action: onSubmit,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
