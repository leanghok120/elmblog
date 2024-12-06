import type { MetaFunction } from "@remix-run/node";
import PostCard from "~/components/PostCard";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Elm" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Discover() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black">Discover</h1>
      <div className="mt-8 space-y-4">
        <PostCard
          id={2}
          title={"My Terminal Website"}
          date={"08, 9, 2023"}
          author={"Killua"}
        />
      </div>
      <Footer />
    </>
  );
}
