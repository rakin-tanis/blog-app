export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdate: string;
  category: string;
  likeCount: number;
  viewCount: number;
};

export type PostReq = Pick<Post, "title" | "author" | "content" | "category">;
