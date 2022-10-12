import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import useLocalStorageState from "use-local-storage-state"
import { PostContext } from "../contexts/postContext"
import { likePost, dislikePost } from "../services/post"
import { Post } from "../types/Post"

export const useLike = () => {
  const { posts, setPosts, setPost} = useContext(PostContext)
  const [favorites, setFavorites] = useLocalStorageState('likes', {
    defaultValue: ['']
  })

  const { mutate: likeMutate } = useMutation({
    mutationFn: async (postId: string) => {
      return likePost(postId)
    },
    onSuccess: (data: Post) => {
      const index = posts.map(p => p.id).indexOf(data.id);
      const oldPosts = posts.filter(p => p.id !== data.id)
      oldPosts.splice(index, 0, data);
      setPosts(oldPosts)
      setPost(data)
    }
  })

  const { mutate: dislikeMutate } = useMutation({
    mutationFn: async (postId: string) => {
      return dislikePost(postId)
    },
    onSuccess: (data: Post) => {
      const index = posts.map(p => p.id).indexOf(data.id);
      const oldPosts = posts.filter(p => p.id !== data.id)
      oldPosts.splice(index, 0, data);
      setPosts(oldPosts)
      setPost(data)
    }
  })

  

  const toggleLike = (postId: string | undefined) => {
    if(!postId) return;

    setFavorites((previous: string[]) => {
      if (previous.includes(postId)) {
        dislikeMutate(postId)
        return previous.filter((id) => id !== postId);
      } else {
        likeMutate(postId)
        return [...previous, postId];
      }
    })
  }

  const isLiked = (postId: string | undefined) => {
    if(!postId) return;
    return favorites.includes(postId);
  }

  return { isLiked, toggleLike };
}