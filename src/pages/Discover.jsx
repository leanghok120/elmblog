import React from "react";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

function Discover() {
  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-10 w-1/3">
          <h1 className="text-4xl font-black">Discover</h1>
          <div className="mt-10 space-y-5">
            <Post
              id={4}
              title="A personal website"
              date="02, Oct, 2024"
              author="Bashbunni"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
