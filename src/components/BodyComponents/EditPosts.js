import React, { useState, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { updatePosts } from "../../api/crudCalls";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
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
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
}));

const EditPosts = () => {
  const { postsContext } = useContext(BlogContextReciever);
  const [posts, setPosts] = postsContext;
  const classes = useStyles();
  const { params } = useRouteMatch();
  const editPostId = parseInt(params.id);
  const [postUpdateData, setPostUpdateData] = useState({ title: "", body: "" });

  const updateSubmitHandler = (e) => {
    e.preventDefault();
    const updateData = (dataToUpdate) =>
      posts.map((item) =>
        item.id === editPostId ? { ...item, ...dataToUpdate } : item
      );

    updatePosts(editPostId, postUpdateData)
      .then(({ data }) => {
        setPosts(updateData(data));
      })
      .catch((err) => console.log(err));
    setPostUpdateData({ title: "", body: "" });
  };
  return (
    <div>
      <h1>Edit Posts: ID({editPostId})</h1>

      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={10}>
            <div>
              <form onSubmit={updateSubmitHandler}>
                <TextField
                  id="eidt-post"
                  label="Edit Post Title"
                  margin="normal"
                  value={postUpdateData.title}
                  variant="outlined"
                  autoFocus={true}
                  required
                  onChange={(e) =>
                    setPostUpdateData({
                      ...postUpdateData,
                      title: e.target.value,
                    })
                  }
                />
                <br />
                <TextField
                  id="eidt-post"
                  label="Edit Post Body"
                  margin="normal"
                  value={postUpdateData.body}
                  multiline
                  required
                  rows={4}
                  variant="outlined"
                  onChange={(e) =>
                    setPostUpdateData({
                      ...postUpdateData,
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

export default EditPosts;
