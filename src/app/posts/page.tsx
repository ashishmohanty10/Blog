import PostList from "@/components/posts-list";
import { Suspense } from "react";

const Posts = async () => {
  return (
    <div className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>

      <Suspense fallback="Loading...">
        <PostList />
      </Suspense>
    </div>
  );
};

export default Posts;
