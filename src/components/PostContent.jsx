import React from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router";

function PostContent() {
  const params = useParams();

  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">
            Post Content #{params.postId}
          </h1>
        </div>
      </div>
    </>
  );
}

export default PostContent;
