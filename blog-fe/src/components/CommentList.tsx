import { useContext } from "react";
import CommentItem from "./CommentItem";
import { Comment } from "../types/Comment";
import { CommentContext } from "../contexts/commentContext";

const CommentList = () => {

  const { comments } = useContext(CommentContext)

  return (comments && <div className="card-container">
    {comments.map((comment: Comment) => <CommentItem key={comment.id} comment={comment} />)}
  </div>);
};

export default CommentList;
