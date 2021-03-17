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
  const [choiceButtonState, setChoiceButtonState] = useState({
    likeButton: false,
    dislikeButton: false,
  });

  // const onLikeClick = (choice) => {
  //   const isIdPresent = like.find((el) => el.id === id);
  //   if (choice === "like") {
  //     console.log("like clicked");
  //     console.log(isIdPresent);

  //     if (isIdPresent) {
  //       //updating like to dislike
  //       const newArray = like.filter((el) => el.id !== isIdPresent.id);
  //       setLike([...newArray, { id, status: !isIdPresent.status }]);
  //       setChoiceButtonState({
  //         disLiked: !choiceButtonState.disLiked,
  //         liked: !choiceButtonState.liked,
  //       });
  //       console.log(isIdPresent);
  //     } else {
  //       //initial like
  //       setLike([...like, { id, status: true }]);
  //       setChoiceButtonState({
  //         ...choiceButtonState,
  //         liked: !choiceButtonState.liked,
  //       });
  //     }
  //   } else {
  //     console.log("dislike clicked");
  //     if (isIdPresent) {
  //       //updating dislike to like
  //       //its not initial choice
  //       //only selecting like that are !== clicked post
  //       const newArray = like.filter((el) => el.id !== isIdPresent.id);
  //       setLike([...newArray, { id, status: !isIdPresent.status }]);
  //       setChoiceButtonState({
  //         disLiked: !choiceButtonState.disLiked,
  //         liked: !choiceButtonState.liked,
  //       });
  //     } else {
  //       //initial dislike
  //       setLike([...like, { id, status: false }]);
  //       setChoiceButtonState({
  //         ...choiceButtonState,
  //         disLiked: !choiceButtonState.disLiked,
  //       });
  //     }
  //   }
  //   console.log(like);
  // };

  const likeHandler = () => {
    if (hasInteractedBefore(dislike)) {
      //it was disliked but now its liked so we have to alter the dislike state
      setDislike(removeInteraction(dislike));
      console.log("was disliked before");
      setChoiceButtonState({
        dislikeButton: false,
        likeButton: true,
      });
    } else {
      setChoiceButtonState({
        ...choiceButtonState,
        likeButton: true,
      });
    }
    setLike([...like, { id }]);
  };
  const dislikeHandler = () => {
    if (hasInteractedBefore(like)) {
      //it was liked but now its disliked so we have to alter the like state
      setLike(removeInteraction(like));
      setChoiceButtonState({
        dislikeButton: true,
        likeButton: false,
      });
    }else{
      setChoiceButtonState({
        ...choiceButtonState,
        dislikeButton: true,
      });
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
          disabled={choiceButtonState.dislikeButton}
        >
          <ThumbDownIcon />
        </IconButton>
        <IconButton
          color="primary"
          size="medium"
          onClick={likeHandler}
          disabled={choiceButtonState.likeButton}
        >
          <ThumbUpIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Blogs;
