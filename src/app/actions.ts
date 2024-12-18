"use server";
import { revalidatePath } from "next/cache";

export async function postAction(
  values: PostValues,
  id?: number | undefined
): Promise<PostResponse | null> {
  console.log(values);
  if (!values.title || !values.body)
    throw new Error("Invalid input: Both title and body are required.");
  const path = `https://jsonplaceholder.typicode.com/posts/${id ? id : ""}`;
  try {
    const res = await fetch(path, {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      console.error(
        `Failed to create or edit post: ${res.status} ${res.statusText}`
      );
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    const data: PostResponse = await res.json();
    revalidatePath("/");
    console.log({ data });
    return data;
  } catch (err) {
    console.error("An error occurred while creating or editing the post:", err);
    return null;
  }
}

export async function deletePost(id: number) {
  const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
  try {
    const res = await fetch(path, {
      method: "DELETE",
    });
    if (!res.ok) {
      console.error(`Failed to delete post: ${res.status} ${res.statusText}`);
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    revalidatePath("/");
    console.log({ deltetdata: data });
    return data;
  } catch (err) {
    console.error("An error occurred while deleting the post:", err);
    return null;
  }
}
