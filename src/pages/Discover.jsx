import React from "react";
import Sidebar from "../components/Sidebar";

function Discover() {
  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-10 w-1/3">
          <h1 className="text-4xl font-black">Discover</h1>
        </div>
      </div>
    </>
  );
}

export default Discover;
