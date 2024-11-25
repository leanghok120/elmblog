import React from "react";
import { useNavigate } from "react-router";

function Post({ id, title, date, author }) {
  const navigate = useNavigate();

  function navigateToPost() {
    navigate(`/posts/${id}`);
  }

  return (
    <div
      className="border-2 border-gruvbox-bg2 rounded-xl p-5 cursor-pointer shadow-lg"
      onClick={navigateToPost}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gruvbox-gray italic">{date}</p>
      <p className="mt-2">
        By <strong>{author}</strong>
      </p>
    </div>
  );
}

export default Post;
