export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createDate: string;
  category: string;
  likeCount: number;
  viewCount: number;
  image: string;
};

export type PostReq = Pick<Post, "title" | "author" | "content" | "category">;
