import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import db from "../appwrite/databases";
import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
} from "@mdxeditor/editor";
import { Loader2 } from "lucide-react";

function PostContent() {
  const params = useParams();
  const [post, setPost] = useState({ title: "", content: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [params.postId]);

  async function fetchPost() {
    const response = await db.posts.get(params.postId);

    setPost(response);
    setIsLoading(false);
  }

  return (
    <>
      <Navbar />
      <div className="h-full flex justify-center">
        {isLoading ? (
          <Loader2 className="animate-spin mt-5" />
        ) : (
          <div className="p-4 md:p-10 w-full max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black">{post.title}</h1>
            <div className="flex gap-2 text-gruvbox-gray mb-6">
              <p className="font-bold">{post.author}</p>
              <span>&middot;</span>
              <p className="italic">{post.date}</p>
            </div>
            <MDXEditor
              markdown={post.content}
              readOnly
              contentEditableClassName="prose"
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                markdownShortcutPlugin(),
              ]}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default PostContent;
