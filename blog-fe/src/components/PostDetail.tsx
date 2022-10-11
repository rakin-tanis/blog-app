import moment from "moment";
import { useContext } from "react";
import { PostContext } from "../contexts/postContext";

const PostDetail = () => {
  const { post } = useContext(PostContext)

  return (post
    ? <div>
      <img className="image" src={`${process.env.REACT_APP_API_URL}/image?name=${post?.image}`} alt={post?.title} />
      <div className="details">
        <h3>{post?.title}</h3>
        <p className="meta">
          <span>{post?.author}</span> | {' '}
          <span>{moment(post?.createDate).format("MMMM Do YYYY, HH:mm:ss")}</span></p>
        <p className="content">{post?.content}</p>
      </div>
    </div>
    : <></>);
};

export default PostDetail;
