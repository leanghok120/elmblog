import { useState } from "react";
import Editor from "~/components/Editor";
import TitleInput from "~/components/TitleInput";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm | Write" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function Write() {
  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState(
    "Start writing... (markdown is supported)"
  );

  return (
    <>
      <TitleInput title={title} setTitle={setTitle} />
      <Editor content={content} setContent={setContent} />
    </>
  );
}

export default Write;
