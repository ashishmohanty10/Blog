import Link from "next/link";
import React from "react";

const Posts = async () => {
  const response = await fetch("https://dummyjson.com/posts?limit=10");

  const data = await response.json();

  return (
    <div className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>

      <ul>
        <li>
          {data.map((post) => (
            <li key={post.id} className="mb-5">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Posts;
