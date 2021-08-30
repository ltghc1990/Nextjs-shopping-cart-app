import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200 h-screen overflow-y-auto">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-10 bg-white">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
