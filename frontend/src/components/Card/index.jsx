import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Card.module.scss";
import Buttons from "../Buttons";

const Card = ({ className, item }) => {
  const [description, setDescription] = useState(
    item.blog_content.substr(0, 25)
  );

  return (
    <div
      className={
        item.nb_likes > item.nb_dislikes
          ? cn(styles.greencard, className)
          : cn(styles.redcard, className)
      }
      aria-hidden="true"
    >
      <Link to={`/blog/${item?._id}`}>
        <div className={styles.preview}>
          <img src={`${item?.blog_image}`} alt={`${item?.blog_image}`} />
        </div>
        <div className={styles.foot}>
          <div className={styles.status}>
            <p>{`${item?.blog_name}`} </p>

            <p className={styles.count} max>
              {description}
            </p>
            <a className={styles.count}>Continue reading</a>
            <p className={styles.count}> Author: {item?.author}</p>
          </div>

          <div
            className={styles.bid}
            dangerouslySetInnerHTML={{ __html: item?.count }}
          />
        </div>
      </Link>
      <Buttons
        blog_id={item._id}
        nb_likes={item.nb_likes}
        nb_dislikes={item.nb_dislikes}
      />
    </div>
  );
};

export default Card;
