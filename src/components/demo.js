import React, { useContext } from "react";
import { BlogContextReciever } from "../blogContext/blogContext";
const Demo = () => {
    const {postsContext,limitContext} = useContext(BlogContextReciever)
    const [limit,setLimit] = limitContext;
    

  return (
    <div>
      <h1>hey im demo</h1>
    </div>
  );
};

export default Demo;
