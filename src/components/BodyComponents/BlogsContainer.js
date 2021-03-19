import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Blog from "./Blogs";
import { BlogContextReciever } from "../../blogContext/blogContext";
import Button from "@material-ui/core/Button";
import { Route } from "react-router-dom";

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
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
}));

export default function BlogContainer() {
    const {
      postsContext,
      limitContext,
      likeContext,
      dislikeContext,
      // choiceButtonContext,
    } = useContext(BlogContextReciever);
    const [posts, setPosts] = postsContext;
    const [limit, setLimit] = limitContext;
    const [like, setLike] = likeContext;
    const [dislike, setDislike] = dislikeContext;
  // const [choiceButtonState, setChoiceButtonState] = choiceButtonContext;

  //onLoadNext will change the state limit to render next 10 posts'
  const onLoadNext = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  const onLoadPrevious = () => {
    setLimit((prevLimit) => prevLimit - 10);
  };
  const classes = useStyles();
  const postData = posts.slice(limit, limit + 10).map((post) => {
    return (
      <Paper className={classes.paper} elevation={10} key={post.id}>
        <Blog
          key={post.id}
          title={post.title}
          body={post.body}
          id={post.id}
          like={like}
          setLike={setLike}
          dislike={dislike}
          setDislike={setDislike}
        />
      </Paper>
    );
  });

  return (
    <div>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttons}
          onClick={onLoadPrevious}
          disabled={limit === 0 ? true : false}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onLoadNext}
          disabled={limit === 90 ? true : false}
        >
          Next
        </Button>
      </div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          {postData}
        </Grid>
      </Grid>
    </div>
  );
}
