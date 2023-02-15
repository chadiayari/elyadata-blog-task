import React, { useState, useEffect } from "react";
import styles from "../styles/Search.module.scss";
import Card from "../components/Card";
import cn from "classnames";
import { HiOutlineSearch } from "react-icons/hi";
import blogService from "../services/blog-service";
import { searchService } from "../utils/hooks/utils";
import Buttons from "../components/Buttons";

export default function Home() {
  const [blogsData, setBlogsData] = useState([]);
  const [blogsFilteredData, setBlogsFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    blogService.getAllBlogs().then((data) => setBlogsData(data));
  }, []);

  useEffect(() => {}, [search]);

  const handleSearchChanged = (e) => {
    setSearch(e.target.value);
    var res = blogService
      .searchBlogName(e.target.value)
      .then((data) => setBlogsFilteredData(data));
    console.log(res);
  };

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn(styles.container)}>
        <div className={styles.row}>
          <div className={"filters_target " + styles.filters}>
            <div className={styles.top}>
              <div className={styles.title}>Elyadata Blog</div>
            </div>
            <div className={styles.form}>
              <input
                className={styles.input}
                type="text"
                value={search}
                onChange={(e) => handleSearchChanged(e)}
                name="search"
                placeholder="Search blog name"
                required
              />
            </div>
          </div>
          <div>
            <div className={styles.wrapper}>
              <div className={styles.list}>
                {blogsFilteredData?.length
                  ? blogsFilteredData?.map((blog) => (
                      <Card
                        className={styles.card}
                        item={blog}
                        key={blog._id}
                      />
                    ))
                  : blogsData?.map((blog) => (
                      <Card
                        className={styles.card}
                        item={blog}
                        key={blog._id}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
