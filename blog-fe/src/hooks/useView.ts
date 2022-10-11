import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import { PostContext } from "../contexts/postContext"
import { viewPost } from "../services/post"
import { Post } from "../types/Post"

export const useView = () => {
  const { posts, post, setPosts, setPost} = useContext(PostContext)

  const { mutate } = useMutation({
    mutationFn: async (postId: string) => {
      return viewPost(postId)
    },
    onSuccess: (data: Post) => {
      const oldPosts = posts.filter(p => p.id !== data.id)
      setPosts([...oldPosts, data])
      setPost(data);
    }
  })

  const viewMutate = (postId: string) => {
    if(post?.id === postId){
      return
    }
    mutate(postId)
  }

  return { viewMutate };
}