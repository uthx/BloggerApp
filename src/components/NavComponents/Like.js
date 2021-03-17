//contains all the liked posts
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { BlogContextReciever } from "../../blogContext/blogContext";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "#90e0ef",
    margin: 10,
    cursor: "pointer",
  },
}));
const Like = () => {
  const { likeContext, postsContext } = useContext(BlogContextReciever);
  const [like, setLike] = likeContext;
  const [posts, setPosts] = postsContext;
  const classes = useStyles();
  const arr = like.map(({ id }) => id);
  //   const displayLikedPosts = like.map(el => posts.find(el.id)) => {

  //   }
  
  console.log(arr)
  return (
    <div>
      <h1>Liked Posts</h1>
    </div>
  );
};

export default Like;
