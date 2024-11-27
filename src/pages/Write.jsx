import React, { useState } from "react";
import Editor from "../components/Editor";
import Navbar from "../components/Navbar";

function Write() {
  const [title, setTitle] = useState("Title");

  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
          <input
            className="text-3xl md:text-4xl font-black mb-6 bg-transparent outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor />
        </div>
      </div>
    </>
  );
}

export default Write;
