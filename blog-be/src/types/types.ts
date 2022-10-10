export type CommentRes = {
  id: string;
  name: string;
  email: string;
  createDate: Date;
  content: string;
};

export type PostRes = {
  id: string;
  title: string;
  content: string;
  author: string;
  createDate: Date;
  category: string;
  likeCount: number;
  viewCount: number;
  image: string;
};

export type PostReq = {
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
}