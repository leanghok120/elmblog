import React from "react";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-10 w-1/3">
          <h1 className="text-4xl font-black">Home</h1>
          <div className="mt-10 space-y-5">
            <Post title="My Neovim Setup" date="02, Oct, 2024" />
            <Post title="Learning Fullstack Development" date="05, Mar, 2023" />
            <Post title="Morgen Calendar" date="09, Jan, 2021" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
