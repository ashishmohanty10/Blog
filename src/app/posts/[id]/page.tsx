import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

interface Props {
  params: {
    id: string;
  };
}

const SinglePost = async ({ params }: Props) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!post) {
    notFound();
  }

  return (
    <div className="px=7 pt-24 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold mb-7">{post.title}</h1>

      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </div>
  );
};

export default SinglePost;
