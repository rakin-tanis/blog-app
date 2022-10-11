export type Comment = {
  id: string;
  name: string;
  createDate: string;
  content: string;
};

export type CommentReq = {
  email: string;
} & Pick<Comment, "name" | "content">;
