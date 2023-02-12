import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Card.module.scss";

const Card = ({ className, item }) => {
  return (
    <div className={cn(styles.card, className)} aria-hidden="true">
      <Link to={`/blog/${item?._id}`}>
        <div className={styles.preview}>
          <img src={`${item?.blog_image}`} alt={`${item?.blog_image}`} />
        </div>
        <div className={styles.foot}>
          <div className={styles.status}>
            <p>{`${item?.blog_name}`} </p>

            <p className={styles.count}>
              blog_content
              {item?.blog_content}
            </p>
            <p className={styles.count}> {item?.author}</p>
          </div>
          <div
            className={styles.bid}
            dangerouslySetInnerHTML={{ __html: item?.count }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
