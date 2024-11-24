import React from "react";

function Post({ title, date, author }) {
  return (
    <div className="border-2 border-gruvbox-bg2 rounded-xl p-5 cursor-pointer shadow-lg">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gruvbox-gray italic">{date}</p>
      <p className="mt-2">
        By <strong>{author}</strong>
      </p>
    </div>
  );
}

export default Post;
