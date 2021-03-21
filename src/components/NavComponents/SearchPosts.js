import React, { useContext, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { BlogContextReciever } from "../../blogContext/blogContext";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Blog from "../BodyComponents/Blogs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "#90e0ef",
    // background: '#cae9ff',
    margin: 10,
  },
}));
const SearchPosts = () => {
  const classes = useStyles();

  const match = useRouteMatch();
  const searchPostId = parseInt(match.params.id);
  const { postsContext, likeContext, dislikeContext } = useContext(
    BlogContextReciever
  );
  const [posts, setPosts] = postsContext;
  const [like, setLike] = likeContext;
  const [dislike, setDislike] = dislikeContext;
  const searchPostObject = posts
    .filter((post) => post.id === searchPostId)
    .pop();

  const searchPostData = (
    <Paper className={classes.paper} elevation={10} key={searchPostObject?.id}>
      <Blog
        key={searchPostObject?.id}
        title={searchPostObject?.title}
        body={searchPostObject?.body}
        id={searchPostObject?.id}
        like={like}
        setLike={setLike}
        dislike={dislike}
        setDislike={setDislike}
      />
    </Paper>
  );
  console.log(posts.length);
  const a = "1fdfdf";
  const ErrorData = () => {
    return (
      <div>
        <h1>Please enter a valid input.</h1>
        <h1>Expexting an ID(num) between 1 to {posts?.length}</h1>
      </div>
    );
  };

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <h1>Search Results:</h1>
          {searchPostObject ? searchPostData : <ErrorData />}
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchPosts;
// title, body, id, like, setLike, dislike, setDislike
