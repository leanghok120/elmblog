import type { MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { LogOut } from "lucide-react";
import { request } from "node:http";
import PostCard from "~/components/PostCard";
import prisma from "~/utils/db";
import { destroyUserSession, getUser } from "~/utils/sessions";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request, params }) {
  const userData = await prisma.user.findUnique({
    where: { username: params.username },
    include: { posts: true },
  });

  const currentUser = await getUser(request);

  return { userData, currentUser };
}

export async function action({ request }) {
  return await destroyUserSession(request);
}

export default function Profile() {
  const { userData, currentUser } = useLoaderData();

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black text-gruvbox-contrast">
        Profile
      </h1>
      <div className="border-2 border-base-200 p-5 rounded-xl shadow-xl mt-8 max-w-96 mx-auto relative">
        {currentUser?.username === userData.username && (
          <Form method="post" className="absolute top-4 right-4">
            <button className="btn btn-ghost text-error">
              <LogOut />
            </button>
          </Form>
        )}
        <img
          src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Adrian"
          alt="avatar"
          className="w-20 rounded-full"
        />
        <h2 className="text-xl md:text-3xl font-semibold mt-2">
          {userData.name}
        </h2>
        <p className="text-gruvbox-muted">@{userData.username}</p>
        <h2 className="text-2xl font-bold mt-6">Posts</h2>
        <div className="mt-6 space-y-4">
          {userData.posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              author={userData.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
