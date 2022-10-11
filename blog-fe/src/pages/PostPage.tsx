
import { useParams } from "react-router-dom";
import moment from 'moment'
import ButtonBar from "../components/ButtonBar";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { PostContext } from "../contexts/postContext";
import { useContext } from "react";
import { CommentProvider } from "../contexts/commentContext";
import Footer from "../components/Footer";

const PostPage = () => {
  const { post, view } = useContext(PostContext)

  let { id } = useParams();
  if (id) {
    view(id);
  }

  return (post &&
    <CommentProvider>
      <div className="post">
        <img className="image" src={`${process.env.REACT_APP_API_URL}/image?name=${post.image}`} alt={post.title} />
        <div className="details">
          <h3>{post.title}</h3>
          <p className="meta">
            <span>{post.author}</span> | {' '}
            <span>{moment(post.createDate).format("MMMM Do YYYY, HH:mm:ss")}</span></p>
          <p className="content">{post.content}</p>
        </div>
        <ButtonBar />
        <CommentForm />
        <CommentList />
        <Footer/>
      </div>
    </CommentProvider>
  );
};

export default PostPage;
