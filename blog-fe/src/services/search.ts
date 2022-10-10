import { fetcher } from "./fetcher";

export const search = async (searchText: string) => {
  return await fetcher({ method: "GET", path: `/post/search?q=${searchText}` });
}