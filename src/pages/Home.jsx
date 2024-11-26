import React from "react";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Home</h1>
          <div className="mt-6 md:mt-10 space-y-4 md:space-y-5">
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
            <Post
              id={3}
              title="Morgen Calendar"
              date="09, Jan, 2021"
              author="Leanghok"
            />
            <Post
              id={3}
              title="Morgen Calendar"
              date="09, Jan, 2021"
              author="Leanghok"
            />
            <Post
              id={3}
              title="Morgen Calendar"
              date="09, Jan, 2021"
              author="Leanghok"
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
