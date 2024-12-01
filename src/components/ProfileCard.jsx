import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useAuth } from "./AuthProvider";
import db from "../appwrite/databases";
import { Query } from "appwrite";
import ProfileSettings from "./ProfileSettings";

function ProfileCard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getProfile();
    getUserPosts();
  }, []);

  async function getProfile() {
    const response = await db.profiles.list([Query.equal("userId", user.$id)]);

    setProfile(response.documents[0]);
  }

  async function getUserPosts() {
    const response = await db.posts.list([Query.equal("userId", user.$id)]);

    setPosts(response.documents);
  }

  return (
    <div className="border-2 border-gruvbox-bg2 rounded-2xl p-5 mt-10 relative">
      <ProfileSettings username={user.name} getProfile={getProfile} />
      <img
        src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Brian"
        alt="profile picture"
        className="w-20 rounded-full"
      />
      <h2 className="font-bold text-3xl">{user.name}</h2>
      <p className="mt-2">{profile.bio}</p>
      <h3 className="font-bold text-2xl mt-5">Posts</h3>
      <div className="mt-3 space-y-5">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.$id}
              id={post.$id}
              title={post.title}
              date={post.date}
              author={post.author}
            />
          ))
        ) : (
          <p className="text-center text-gruvbox-gray">No posts!</p>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
