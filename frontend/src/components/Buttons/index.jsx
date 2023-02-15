import React, { useEffect, useState } from "react";
import c from "classnames";
import "./styles.css";
import blogService from "../../services/blog-service";

export default function Buttons({ blog_id, nb_likes, nb_dislikes }) {
  const [like, setLike] = useState(nb_likes);
  const [dislike, setDislike] = useState(nb_dislikes);
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

  const updateApi = async () => {
    await blogService.updateLikesAndDislikes(blog_id, like, dislike);
  };

  useEffect(() => {
    updateApi();
  }, [like, dislike]);

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
        <i className="fa fa-thumbs-up like-button"></i> {like}
      </button>{" "}
      <button
        className={c({ ["active"]: dislikeActive })}
        onClick={() => handleDislikeClicked()}
      >
        <i className="fa fa-thumbs-down dislike-button"> </i> {dislike}
      </button>
    </>
  );
}
