import type { MetaFunction } from "@remix-run/node";
import type { Post } from "@prisma/client";
import PostCard from "~/components/PostCard";
import Footer from "~/components/Footer";
import prisma from "~/utils/db";
import { redirect, useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/sessions";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }) {
  const user = await getUser(request);
  if (!user) {
    return redirect("/signup");
  }

  const posts: Post[] = await prisma.post.findMany({ include: { user: true } });

  return posts;
}

export default function Index() {
  const posts = useLoaderData<Post[]>();

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black text-gruvbox-contrast">
        Home
      </h1>
      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            author={post.user.name}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
