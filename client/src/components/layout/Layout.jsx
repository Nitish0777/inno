import React from "react";
import Header from "./header/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
