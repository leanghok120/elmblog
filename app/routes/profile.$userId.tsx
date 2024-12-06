import PostCard from "~/components/PostCard";

export default function Profile() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-black">Profile</h1>
      <div className="border-2 border-base-200 p-5 rounded-xl shadow-xl mt-8 max-w-96 mx-auto">
        <img
          src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Adrian"
          alt="avatar"
          className="w-20 rounded-full"
        />
        <h2 className="text-xl md:text-3xl font-semibold mt-2">Leanghok</h2>
        <p className="mt-1">A quick little bio</p>
        <h2 className="text-2xl font-bold mt-6">Posts</h2>
        <div className="mt-6 space-y-4">
          <PostCard
            id={1}
            title={"Building elm"}
            date={"02, 10, 2024"}
            author={"Leanghok"}
          />
        </div>
      </div>
    </>
  );
}
