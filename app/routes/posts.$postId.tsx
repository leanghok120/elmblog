import { MetaFunction, useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Posts() {
  const params = useParams();

  return (
    <h1 className="text-3xl md:text-4xl font-black">Post {params.postId}</h1>
  );
}
