import React from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";

function Write() {
  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
          <Editor />
        </div>
      </div>
    </>
  );
}

export default Write;
