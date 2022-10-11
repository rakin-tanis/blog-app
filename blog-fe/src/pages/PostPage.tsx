
import { useParams } from "react-router-dom";
import ButtonBar from "../components/ButtonBar";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { useEffect, useRef } from "react";
import { CommentProvider } from "../contexts/commentContext";
import Footer from "../components/Footer";
import { useView } from '../hooks/useView'
import Banner from "../components/Banner";
import PostDetail from "../components/PostDetail";

const PostPage = () => {

  const { viewMutate } = useView();
  const postIdRef = useRef<string>('')

  let { id } = useParams();

  useEffect(() => {
    if (id && postIdRef.current !== id) {
      postIdRef.current = id;
      viewMutate(id);
    }
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <>
      <Banner />
      <div className="post">
        <PostDetail />
        <ButtonBar />
        <CommentProvider>
          <CommentForm />
          <CommentList />
        </CommentProvider>
        <Footer />
      </div>

    </>
  );
};

export default PostPage;
