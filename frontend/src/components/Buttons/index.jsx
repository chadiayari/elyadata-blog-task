import React, { useState, useEffect } from "react";
import c from "classnames";
import "./styles.css";

export default function Buttons() {
  const [like, setLike] = useState(23);
  const [dislike, setDislike] = useState(23);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  const handleDislike = () => {
    setDislikeActive(!dislikeActive);
    setDislike(dislikeActive ? dislike - 1 : dislike + 1);
  };
  const handleLike = () => {
    setLikeActive(!likeActive);
    setLike(likeActive ? like - 1 : like + 1);
  };

  const handleLikeClicked = () => {
    if (dislikeActive) {
      handleLike();
      handleDislike();
    }
    handleLike();
  };

  const handleDislikeClicked = () => {
    if (likeActive) {
      handleDislike();
      handleLike();
    }
    handleDislike();
  };

  return (
    <>
      <button
        onClick={() => handleLikeClicked()}
        className={c({ ["active"]: likeActive })}
      >
        <i class="fa fa-thumbs-up like-button"></i> {like}
      </button>{" "}
      <button
        className={c({ ["active"]: dislikeActive })}
        onClick={() => handleDislikeClicked()}
      >
        <i class="fa fa-thumbs-down dislike-button"> </i> {dislike}
      </button>
    </>
  );
}
