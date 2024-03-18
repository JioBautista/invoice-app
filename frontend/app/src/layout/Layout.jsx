import React from "react";
import NavBar from "../navbar/NavBar";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
