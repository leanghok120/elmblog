import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import ToggleEditor from "../components/ToggleEditor";

function Write() {
  const [title, setTitle] = useState("Title");
  const [isPreview, setIsPreview] = useState(false);

  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
          <ToggleEditor isPreview={isPreview} setIsPreview={setIsPreview} />

          {isPreview ? (
            <h1 className="text-3xl md:text-4xl font-black">{title}</h1>
          ) : (
            <input
              className="text-3xl md:text-4xl font-black bg-transparent outline-none w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          )}

          <Editor isPreview={isPreview} />
        </div>
      </div>
    </>
  );
}

export default Write;
