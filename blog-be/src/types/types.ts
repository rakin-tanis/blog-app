export type Comment = {
  id: string;
  name: string;
  email: string;
  createDate: Date;
  content: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  createDate: Date;
  category: string;
  likeCount: number;
  viewCount: number;
};