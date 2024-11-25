import React from "react";

function ToggleEditor({ isPreview, setIsPreview }) {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={() => setIsPreview(false)}
        className={`px-4 py-2 text-sm font-semibold border border-gruvbox-gray rounded-l-md ${
          !isPreview
            ? "bg-gruvbox-bg2 text-gruvbox-fg"
            : "bg-gruvbox-bg text-gruvbox-fg"
        }`}
      >
        Edit
      </button>
      <button
        onClick={() => setIsPreview(true)}
        className={`px-4 py-2 text-sm font-semibold border border-gruvbox-gray rounded-r-md ${
          isPreview
            ? "bg-gruvbox-bg2 text-gruvbox-fg"
            : "bg-gruvbox-bg text-gruvbox-fg"
        }`}
      >
        Preview
      </button>
    </div>
  );
}

export default ToggleEditor;
