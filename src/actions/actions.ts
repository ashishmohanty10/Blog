"use server"; //this is used for server actions only

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  console.log(title);
}
