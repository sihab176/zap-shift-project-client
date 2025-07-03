import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Cursor from "../Cursor/Cursor";

const RootLayout = () => {
  return (
    <div>
      <Cursor></Cursor>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
