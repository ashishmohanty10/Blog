import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export default async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("https://dummyjson.com/posts?limit=10");

  const data: PostsResponse = await response.json();

  return (
    <div>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id} className="mb-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
