import useLocalStorageState from "use-local-storage-state"

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorageState('favorites', {
    defaultValue: ['']
  })

  const toggleFav = (postId: string | undefined) => {
    if(!postId) return;
    setFavorites((previous: string[]) => {
      if (previous.includes(postId)) {
        return previous.filter((id) => id !== postId);
      } else {
        return [...previous, postId];
      }
    })
  }

  const isFav = (postId: string | undefined) => {
    if(!postId) return;
    return favorites.includes(postId);
  }

  return { isFav, toggleFav };
}