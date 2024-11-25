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
            <Post
              id={1}
              title="My Neovim Setup"
              date="02, Oct, 2024"
              author="Leanghok"
            />
            <Post
              id={2}
              title="Learning Fullstack Development"
              date="05, Mar, 2023"
              author="Leanghok"
            />
            <Post
              id={3}
              title="Morgen Calendar"
              date="09, Jan, 2021"
              author="Leanghok"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
