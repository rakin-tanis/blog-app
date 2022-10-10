import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/post/:id",
      element: <PostPage />,
    },
    // {
    //   path: "/favorites",
    //   element: <Favorites />,
    // },
  ]);

  return router;
};

export default Router;
