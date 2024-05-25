import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const posts = await prisma.post.findMany();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
