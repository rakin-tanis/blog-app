export const postMapper = (post: {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  image: string;
  createdate: Date;
  likecount: number;
  viewcount: number;
}) => {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    author: post.author,
    category: post.category,
    image: post.image,
    createDate: post.createdate,
    likeCount: post.likecount,
    viewCount: post.viewcount,
  };
};
