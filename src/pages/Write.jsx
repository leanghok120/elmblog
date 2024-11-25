import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function Write() {
  const [content, setContent] = useState("");

  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-10 w-1/3">
          <h1 className="text-4xl font-black">Write</h1>
          <div className="mt-10">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing... (Markdown is supported)"
              className="w-full min-h-[70vh] p-6 border-2 border-gruvbox-bg2 bg-gruvbox-bg rounded-xl resize-none outline-none shadow-xl leading-relaxed"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Write;
