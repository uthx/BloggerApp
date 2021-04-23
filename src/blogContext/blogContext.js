//this file will hold our context
import { createContext, useState, useEffect } from "react";
import { fetchPosts } from "../api/crudCalls";
export const BlogContextReciever = createContext();

export const BlogContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(0);
  const [like, setLike] = useState([]);
  const [dislike, setDislike] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    fetchPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <BlogContextReciever.Provider
      value={{
        postsContext: [posts, setPosts],
        limitContext: [limit, setLimit],
        likeContext: [like, setLike],
        dislikeContext: [dislike, setDislike],
        searchContext: [searchId, setSearchId],
      }}
    >
      {props.children}
    </BlogContextReciever.Provider>
  );
};
