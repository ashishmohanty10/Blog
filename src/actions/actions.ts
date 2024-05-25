"use server"; //this is used for server actions only

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  //auth Check
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const title = formData.get("title") as string;

  const body = formData.get("body") as string;

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  //revalidate

  revalidatePath("/posts");
}
