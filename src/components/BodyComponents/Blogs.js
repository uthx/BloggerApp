import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { withWidth } from "@material-ui/core";
import { BorderAllRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: "#caf0f8",
    borderRadius: 25,
    padding: 13,
  },
}));

const Blogs = ({ title, body, id, like, setLike, dislike, setDislike }) => {
  const classes = useStyles();

  const likeHandler = () => {
    if (hasInteractedBefore(dislike)) {
      //it was disliked but now its liked so we have to alter the dislike state
      setDislike(removeInteraction(dislike));
      console.log("was disliked before");
    } else {
    }
    setLike([...like, { id }]);
  };
  const dislikeHandler = () => {
    if (hasInteractedBefore(like)) {
      //it was liked but now its disliked so we have to alter the like state
      setLike(removeInteraction(like));
    } else {
    }
    setDislike([...dislike, { id }]);
  };

  //Helper function - like & dislike handler
  const hasInteractedBefore = (state) => {
    //checking to see if the state have an object with current post id
    return state.find((el) => el.id === id);
  };
  const removeInteraction = (state) => {
    //it will remove the object with current id  from the passed state
    const newFilteredState = state.filter((el) => el.id !== id);
    return newFilteredState;
  };
  return (
    <div>
      <h1>ID: {id}</h1>
      <h1>Title: {title}</h1>
      <h1>Body: {body}</h1>
      <div className={classes.buttons}>
        <IconButton
          color="secondary"
          size="small"
          onClick={dislikeHandler}
          disabled={hasInteractedBefore(dislike) ? true : false}
        >
          <ThumbDownIcon />
        </IconButton>
        <IconButton
          color="primary"
          size="medium"
          onClick={likeHandler}
          disabled={hasInteractedBefore(like) ? true : false}
        >
          <ThumbUpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Blogs;
