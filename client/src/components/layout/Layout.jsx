import React from "react";
import Header from "./header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
