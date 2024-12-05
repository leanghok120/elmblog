import type { MetaFunction } from "@remix-run/node";
import PostCard from "~/components/PostCard";
import Footer from "../components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black">Home</h1>
      <PostCard
        title={"Building elm"}
        date={"02, 10, 2024"}
        author={"Leanghok"}
      />
      <Footer />
    </>
  );
}
