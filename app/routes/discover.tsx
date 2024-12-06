import PostCard from "~/components/PostCard";

export default function Discover() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black">Discover</h1>
      <PostCard
        id={2}
        title={"My Terminal Website"}
        date={"08, 9, 2023"}
        author={"Killua"}
      />
    </>
  );
}
