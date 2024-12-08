import { Form, MetaFunction, redirect, useLoaderData } from "@remix-run/react";
import prisma from "~/utils/db";
import type { Post } from "@prisma/client";
import {
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
} from "@mdxeditor/editor";
import { Trash2 } from "lucide-react";
import { getUser } from "~/utils/sessions";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, params }) {
  const post: Post = await prisma.post.findUnique({
    where: {
      id: params.postId,
    },
  });

  const user = await getUser(request);

  return { post, user };
}

export async function action({ params }) {
  await prisma.post.delete({ where: { id: params.postId } });

  return redirect("/");
}

export default function Posts() {
  const { post, user } = useLoaderData<typeof loader>();

  return (
    <>
      {user && post.userId === user.id && (
        <Form method="delete">
          <button className="btn btn-ghost text-red-500 absolute top-5 right-5">
            <Trash2 size={20} />
          </button>
        </Form>
      )}
      <h1 className="text-3xl md:text-4xl font-black text-gruvbox-contrast">
        {post.title}
      </h1>
      <MDXEditor
        markdown={post.content}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          linkPlugin(),
          markdownShortcutPlugin(),
        ]}
        contentEditableClassName="outline-none prose prose-gruvbox mt-8"
        readOnly={true}
      />
    </>
  );
}
