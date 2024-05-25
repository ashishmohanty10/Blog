import React, { Suspense } from "react";

interface Props {
  params: {
    id: string;
  };
}

const SinglePost = async ({ params }: Props) => {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);

  const posts = await response.json();

  return (
    <div className="px=7 pt-24 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold mb-7">{posts.title}</h1>

      <p className="max-w-[700px] mx-auto">{posts.body}</p>
    </div>
  );
};

export default SinglePost;
