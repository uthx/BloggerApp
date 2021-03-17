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

const Blogs = ({ title, body, id, like, setLike }) => {
  const classes = useStyles();
  const [choiceButtonState, setChoiceButtonState] = useState({
    liked: false,
    disLiked: false,
  });

  const onLikeClick = (choice) => {
    const isIdPresent = like.find((el) => el.id === id);
    if (choice === "like") {
      console.log("like clicked");
      console.log(isIdPresent);

      if (isIdPresent) {
        //updating like to dislike
        const newArray = like.filter((el) => el.id !== isIdPresent.id);
        setLike([...newArray, { id, status: !isIdPresent.status }]);
        setChoiceButtonState({
          disLiked: !choiceButtonState.disLiked,
          liked: !choiceButtonState.liked,
        });
        console.log(isIdPresent);
      } else {
        //initial like
        setLike([...like, { id, status: true }]);
        setChoiceButtonState({
          ...choiceButtonState,
          liked: !choiceButtonState.liked,
        });
      }
    } else {
      console.log("dislike clicked");
      if (isIdPresent) {
        //updating dislike to like
        //its not initial choice
        //only selecting like that are !== clicked post
        const newArray = like.filter((el) => el.id !== isIdPresent.id);
        setLike([...newArray, { id, status: !isIdPresent.status }]);
        setChoiceButtonState({
          disLiked: !choiceButtonState.disLiked,
          liked: !choiceButtonState.liked,
        });
      } else {
        //initial dislike
        setLike([...like, { id, status: false }]);
        setChoiceButtonState({
          ...choiceButtonState,
          disLiked: !choiceButtonState.disLiked,
        });
      }
    }
    console.log(like);
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
          onClick={() => onLikeClick("dislike")}
          disabled={choiceButtonState.disLiked}
        >
          <ThumbDownIcon />
        </IconButton>
        <IconButton
          color="primary"
          size="medium"
          onClick={() => onLikeClick("like")}
          disabled={choiceButtonState.liked}
        >
          <ThumbUpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Blogs;
