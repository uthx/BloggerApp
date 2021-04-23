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
    background: "#c1d3fe",
    margin: 10,
    cursor: "pointer",
  },
}));
const Dislike = () => {
  const { dislikeContext, postsContext } = useContext(BlogContextReciever);
  const [dislike] = dislikeContext;
  const [posts] = postsContext;
  const classes = useStyles();

  //filterLikePost will filter liked posts from all posts and return an array of objects of liked posts
  const filterLikePost = () => {
    const dislikedPostArray = [];
    dislike.forEach(({ id }) => {
      dislikedPostArray.push(...posts.filter((post) => post.id === id));
    });
    return dislikedPostArray;
  };
  const dislikedPostsObjects = filterLikePost();
  const dislikedPostData = dislikedPostsObjects.map(({ id, title, body }) => {
    return (
      <Paper className={classes.paper} elevation={10} key={id}>
        <div>
          <h1>ID: {id}</h1>
          <h1>Title: {title}</h1>
          <h1>Body: {body}</h1>
        </div>
      </Paper>
    );
  });

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <h1>Disliked Posts</h1>
          {dislike.length ? dislikedPostData : <h1>No Posts Disliked Yet!</h1>}
        </Grid>
      </Grid>
    </div>
  );
};

export default Dislike;
