import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import db from "../appwrite/databases";
import { Query } from "appwrite";
import { Loader2 } from "lucide-react";
import { useAuth } from "../components/AuthProvider";

function Discover() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const response = await db.posts.list([Query.notEqual("userId", user.$id)]);

    setPosts(response.documents);
    setIsLoading(false);
  }

  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Discover</h1>
          {isLoading ? (
            <Loader2 className="animate-spin mt-5 mx-auto" />
          ) : (
            <div className="mt-6 md:mt-10 space-y-4 md:space-y-5">
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
          )}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Discover;
