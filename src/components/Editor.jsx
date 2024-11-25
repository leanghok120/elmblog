import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function Editor({ isPreview }) {
  const [content, setContent] = useState("");

  return (
    <div className="mt-10">
      {isPreview ? (
        <ReactMarkdown className="leading-relaxed text-lg">
          {content}
        </ReactMarkdown>
      ) : (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing... (Markdown is supported)"
          className="w-full bg-transparent resize-none outline-none leading-relaxed text-lg min-h-[70vh]"
        />
      )}
    </div>
  );
}

export default Editor;
