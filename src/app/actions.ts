"use server";
export async function addPost(values: any) {
  console.log(values);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: values,
  });
  const data = await res.json();
  return data;
}
