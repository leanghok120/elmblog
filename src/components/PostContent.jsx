import React from "react";
import Sidebar from "./Sidebar";
import { useParams } from "react-router";

function PostContent() {
  const params = useParams();

  return (
    <>
      <Sidebar />
      <div className="h-full flex justify-center">
        <div className="p-10 w-1/3">
          <h1 className="text-4xl font-black">Post Content #{params.postId}</h1>
        </div>
      </div>
    </>
  );
}

export default PostContent;
