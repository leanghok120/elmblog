import React from "react";
import Editor from "../components/Editor";
import Navbar from "../components/Navbar";

function Write() {
  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black mb-6">Title</h1>
          <Editor />
        </div>
      </div>
    </>
  );
}

export default Write;
