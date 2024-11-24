import React from "react";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

function Profile() {
  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-10 w-1/3">
          <h1 className="text-4xl font-black">Profile</h1>
          <div className="border-2 border-gruvbox-bg2 rounded-2xl p-5 mt-10">
            <img
              src="https://avatars.githubusercontent.com/u/112290652?v=4"
              alt="profile picture"
              className="w-20 rounded-full"
            />
            <h2 className="font-bold text-3xl">Leanghok</h2>
            <p className="mt-2">A quick little bio</p>
            <h3 className="font-bold text-2xl mt-5">Posts</h3>
            <div className="mt-3 space-y-5">
              <Post
                title="A personal website"
                date="02, Oct, 2024"
                author="Bashbunni"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
