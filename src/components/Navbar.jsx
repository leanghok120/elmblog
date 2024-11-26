import React from "react";
import BottomNavbar from "./BottomNavbar";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:hidden">
        <BottomNavbar />
      </div>
    </>
  );
}

export default Navbar;
