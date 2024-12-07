import { MetaFunction, useLoaderData } from "@remix-run/react";
import prisma from "~/utils/db";
import type { Post } from "@prisma/client";
import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
} from "@mdxeditor/editor";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ params }) {
  const post: Post = await prisma.post.findUnique({
    where: {
      id: params.postId,
    },
  });

  return post;
}

export default function Posts() {
  const post = useLoaderData<Post>();

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black text-gruvbox-contrast">
        {post.title}
      </h1>
      <MDXEditor
        markdown={post.content}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
        ]}
        contentEditableClassName="outline-none prose prose-gruvbox mt-8"
        readOnly={true}
      />
    </>
  );
}
