import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useAuth } from "./AuthProvider";
import db from "../appwrite/databases";
import { Query } from "appwrite";

function ProfileCard() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUsersPost();
  }, []);

  async function getUsersPost() {
    const response = await db.posts.list([Query.equal("author", user.name)]);

    setPosts(response.documents);
  }

  return (
    <div className="border-2 border-gruvbox-bg2 rounded-2xl p-5 mt-10">
      <img
        src="https://avatars.githubusercontent.com/u/112290652?v=4"
        alt="profile picture"
        className="w-20 rounded-full"
      />
      <h2 className="font-bold text-3xl">{user.name}</h2>
      <p className="mt-2">A quick little bio</p>
      <h3 className="font-bold text-2xl mt-5">Posts</h3>
      <div className="mt-3 space-y-5">
        {posts.map((post) => (
          <Post
            key={post.$id}
            id={post.$id}
            title={post.title}
            date={post.date}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
