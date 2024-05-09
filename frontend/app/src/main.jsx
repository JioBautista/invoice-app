import React from "react";
import ReactDOM from "react-dom/client";
import App, { fetchClients, fetchClientInfo, fetchUsers } from "./App.jsx";
import ClientList from "./components/ClientList.jsx";
import ClientInfo from "./components/ClientInfo.jsx";
import Overview from "./overview/Overview.jsx";
import Task from "./task/Task.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import LogIn from "./login/LogIn.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Overview />,
        loader: fetchUsers,
      },
      {
        path: "/tasks",
        element: <Task />,
      },
      {
        path: "/clients",
        element: <ClientList />,
        loader: fetchClients,
      },
      {
        path: "/clients/:clientId",
        element: <ClientInfo />,
        loader: fetchClientInfo,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
