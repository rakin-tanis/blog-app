import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import { PostContext } from "../contexts/postContext"
import { likePost } from "../services/post"
import { Post } from "../types/Post"

export const useLike = () => {
  const { posts, post, setPosts, setPost} = useContext(PostContext)

  const { mutate: likeMutate } = useMutation({
    mutationFn: async (postId: string) => {
      return likePost(postId)
    },
    onSuccess: (data: Post) => {
      const oldPosts = posts.filter(p => p.id !== data.id)
      setPosts([...oldPosts, data])
      setPost(data)
    }
  })

  return { likeMutate };
}