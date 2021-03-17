//this file will hold our context
import { createContext, useState, useReducer, useEffect } from "react";
import { fetchPosts } from "../api/crudCalls";
export const BlogContextReciever = createContext();

export const BlogContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(0);
  const [like, setLike] = useState([]);
  useEffect(() => {
    fetchPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <BlogContextReciever.Provider
      value={{
        postsContext: [posts, setPosts],
        limitContext: [limit, setLimit],
        likeContext: [like, setLike],
      }}
    >
      {props.children}
    </BlogContextReciever.Provider>
  );
};
