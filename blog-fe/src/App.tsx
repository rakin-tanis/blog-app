import { useState } from 'react';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import './App.css';
import { iconConfig } from './configs/iconConfig'
import { PostProvider } from './contexts/postContext';

iconConfig();

function App() {
  const [queryClient] = useState(() => new QueryClient());
  
  const router = Router()

  return (
    <QueryClientProvider client={queryClient}>
      <PostProvider>
        <RouterProvider router={router} />
      </PostProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
