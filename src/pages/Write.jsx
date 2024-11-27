import React, { useState } from "react";
import Editor from "../components/Editor";
import Navbar from "../components/Navbar";
import db from "../appwrite/databases";
import { useNavigate } from "react-router";
import { CheckIcon } from "lucide-react";

function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState(
    "Start writing... (markdown is supported)",
  );

  function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${dd}, ${mm}, ${yyyy}`;
  }

  async function publishPost() {
    const date = getCurrentDate();
    const payload = { title, content, author: "Leanghok", date };

    await db.posts.create(payload);
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto min-h-screen relative">
          <input
            className="text-3xl md:text-4xl font-black mb-6 bg-transparent outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor content={content} setContent={setContent} />
          <button
            onClick={publishPost}
            className="flex gap-1 font-bold absolute bottom-5 right-5"
          >
            <CheckIcon /> Publish
          </button>
        </div>
      </div>
    </>
  );
}

export default Write;
