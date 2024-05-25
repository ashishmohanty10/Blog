import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

import React from "react";

const Page = async () => {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Posts</h1>

      <Form />

      <LogoutLink className="px-4 py-2 bg-zinc-900 text-zinc-100 rounded">
        Logout
      </LogoutLink>
    </main>
  );
};

export default Page;
