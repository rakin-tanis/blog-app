export const commentMapper = (comment: {
  id: string;
  name: string;
  content: string;
  createdate: Date;
}) => {
  return {
    id: comment.id,
    name: comment.name,
    content: comment.content,
    createDate: comment.createdate,
  };
};