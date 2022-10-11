import { createContext, useContext, useRef, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Post } from '../types/Post';
import { PostContext } from './postContext';
import { addComment, getCommentsByPostId } from '../services/comment';
import { Comment, CommentReq } from '../types/Comment';

const defaultValues = {
  comments: [] as Array<Comment>, 
  addNewComment: (comment: CommentReq) => {}
}

export const CommentContext = createContext(defaultValues);

export const CommentProvider = ({ children }: any) => {
  const [comments, setComments] = useState<Comment[]>([])
  const { post } = useContext(PostContext)

  const { refetch } = useQuery({
    queryKey: ["search", post?.id],
    queryFn: () => getCommentsByPostId(post?.id),
    keepPreviousData: true,
    onSuccess: (data) => setComments(data)
  });

  const { mutate: addMutate } = useMutation({
    mutationFn: async (data: {postId: string, comment: CommentReq}) => {
      return addComment(data.postId, data.comment)
    },
    onSuccess: (data: Post) => {
      refetch();
    }
  })

  const addNewComment = (comment: CommentReq) => {
    if (!post) return;
    addMutate({postId: post?.id, comment});
  }

  return (
    <CommentContext.Provider value={{ comments, addNewComment }}>
      {children}
    </CommentContext.Provider >
  );
}