import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <main style={{ minHeight: "80vh" }}>{children}</main>
    </div>
  );
};

export default Layout;
