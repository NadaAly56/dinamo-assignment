interface Post {  id: number;
  userId: number;
  title: string;
  body: string;
}
interface PostsFormProps {
  method?: "post" | "put";
  dataRecord?: Post;
}
interface PostValues {
  title: string;
  body: string;
}

interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId?: number;
}
// interface DeleteResponse {

// }
interface DeleteProps {
  text?: string;
  id: number;
}
