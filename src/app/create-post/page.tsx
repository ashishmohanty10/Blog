import { createPost } from "@/actions/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/create-post");
  }
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Posts</h1>

      <form action={createPost} className="h-10 space-x-2 mt-10">
        <input
          type="text"
          name="title"
          placeholder="Title for new posts"
          className="border rounded px-3 h-full"
          required
        />

        <button className="h-full bg-blue-500 px-5 rounded text-white ">
          Sumbit
        </button>
      </form>
    </main>
  );
};

export default Page;
