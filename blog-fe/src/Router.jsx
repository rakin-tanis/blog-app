import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Categories from "./pages/Categories";
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
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/categories",
      element: <Categories />,
    },
  ]);

  return router;
};

export default Router;
