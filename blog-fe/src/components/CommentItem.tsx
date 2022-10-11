import moment from "moment";
import { Comment } from '../types/Comment'

const CommentItem = ({ comment }: { comment: Comment }) => {

  return (comment &&
    <div className="commentItem">
      <div className="content">
        <p>{comment.content}</p>
        <p className="meta">
          <span>{comment.name}</span> | {' '}
          <span>{moment(comment.createDate).format("MMMM Do YYYY, HH:mm:ss")}</span></p>
      </div>
    </div>);
};

export default CommentItem;
