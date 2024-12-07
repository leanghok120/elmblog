import { useState } from "react";
import Editor from "~/components/Editor";
import TitleInput from "~/components/TitleInput";
import { Form, MetaFunction, redirect } from "@remix-run/react";
import prisma from "~/utils/db";
import formatDate from "~/utils/formatDate";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm | Write" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  await prisma.post.create({
    data: { title, content, date: formatDate(new Date()) },
  });

  return redirect("/");
}

function Write() {
  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState(
    "Start writing... (markdown is supported)"
  );

  return (
    <Form method="post">
      <TitleInput title={title} setTitle={setTitle} />
      <Editor content={content} setContent={setContent} />

      <input type="hidden" name="title" value={title} />
      <input type="hidden" name="content" value={content} />

      <button className="absolute bottom-5 right-5 btn">Publish</button>
    </Form>
  );
}

export default Write;
