import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { BlogContextReciever } from "../../blogContext/blogContext";
import { SettingsInputCompositeSharp } from "@material-ui/icons";
import { createNewPost } from "../../api/crudCalls";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "#90e0ef",
    margin: 10,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
}));

const CreatePost = () => {
  const { postsContext, limitContext } = useContext(BlogContextReciever);
  const [posts, setPosts] = postsContext;
  const [limit, setLimit] = limitContext;
  const classes = useStyles();
  const [newPostData, setnewPostData] = useState({ title: "", body: "" });

  const randomUserIdGenerater = () => {
    return Math.floor(Math.random() * Math.floor(20) + 1);
  };
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(posts.length);

    // const filteredPostObject = posts.filter((post) => post.id !== editPostId);
    // console.log(filteredPostObject);
    // function sortPosts(resData) {
    //   filteredPostObject.push(resData);
    //   filteredPostObject.sort((a, b) => {
    //     return a.id - b.id;
    //   });
    //   return filteredPostObject;
    // }
    // const updateData = (dataToUpdate) =>
    //   posts.map((item) =>
    //     item.id === editPostId ? { ...item, ...dataToUpdate } : item
    //   );

    //   updatePosts(editPostId, newPostData)
    //     .then(({ data }) => {
    //       setPosts([...sortPosts(data)]);
    //     })
    //     .catch((err) => console.log(err));
    // };
    createNewPost(newPostData)
      .then(({ data }) => {
        setPosts([
          ...posts,
          {
            title: data.title,
            body: data.body,
            id: posts.length + 1,
            userId: randomUserIdGenerater(),
          },
        ]);
      })
      .catch((err) => console.log(err));
    setnewPostData({ title: "", body: "" });
  };
  return (
    <div>
      <h1>Create New Post</h1>

      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={10}>
            <div>
              <form onSubmit={updateSubmitHandler}>
                <TextField
                  id="eidt-post"
                  label="Edit Post Title"
                  margin="normal"
                  value={newPostData.title}
                  variant="outlined"
                  autoFocus={true}
                  required
                  onChange={(e) =>
                    setnewPostData({
                      ...newPostData,
                      title: e.target.value,
                    })
                  }
                />
                <br />
                <TextField
                  id="eidt-post"
                  label="Edit Post Body"
                  margin="normal"
                  value={newPostData.body}
                  multiline
                  required
                  rows={4}
                  variant="outlined"
                  onChange={(e) =>
                    setnewPostData({
                      ...newPostData,
                      body: e.target.value,
                    })
                  }
                />
                <br />

                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  type="submit"
                >
                  Save
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatePost;
