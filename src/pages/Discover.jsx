import React from "react";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import Footer from "../components/Footer";

function Discover() {
  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Discover</h1>
          <div className="mt-6 md:mt-10 space-y-4 md:space-y-5">
            <Post
              id={4}
              title="A personal website"
              date="02, Oct, 2024"
              author="Bashbunni"
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Discover;
