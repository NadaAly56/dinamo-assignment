interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface PostsFormProps {
  method?: "post" | "put";
  dataRecord?: Post;
}
