import PostsForm from "./components/PostsForm";
import PostsTable from "./components/PostsTable";


export default async function Home() {
  const data: Post[] = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <PostsForm method="post" />
        <PostsTable data={data} />
      </main>
    </div>
  );
}
